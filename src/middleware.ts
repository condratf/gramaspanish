import { lucia } from "./lib/auth";
import { verifyRequestOrigin } from "lucia";
import { sequence, defineMiddleware } from "astro:middleware";

const authMiddleware = defineMiddleware(async (context, next) => {
	if (!context.url.pathname.startsWith("/admin/")) return next()

	if (context.request.method !== "GET") {
		const originHeader = context.request.headers.get("Origin");
		const hostHeader = context.request.headers.get("Host");
		if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
			return new Response(null, {
				status: 403
			});
		}
	}

	const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
	if (!sessionId) {
		context.locals.user = null;
		context.locals.session = null;
		return next();
	}

	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}
	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}
	context.locals.session = session;
	context.locals.user = user;
	return next();
});

// type SuspendedChunk = [id: number, chunk: string]

// const suspenseMiddleware = defineMiddleware(async (context, next) => {
// 	const response = await next();

// 	if (!response.headers.get('content-type')?.startsWith("text/html")) {
// 		return response
// 	}

// 	let streamController:ReadableStreamDefaultController<SuspendedChunk>

// 	const stream = new ReadableStream({
// 		start: (controller) => {
// 			streamController = controller
// 		},
// 	})

// 	const pending = new Set<Promise<string>>();

// 	context.locals.suspend = (promise) => {
// 		const id = pending.size;
// 		pending.add(promise);
// 		promise.then((chunk) => {
// 			pending.delete(promise);
// 			streamController.enqueue([id, chunk]);
// 			if (pending.size === 0) {
// 				streamController.close();
// 			}
// 		});
// 		return id
// 	}

// 	async function* render() {
// 		//@ts-expect-error async iterable
// 		for await (const chunk of response.body) {
// 			yield chunk
// 		}

// 		//@ts-expect-error async iterable
// 		for await (const [id, chunk] of stream) {
// 			yield `<template data-suspense="${id}">${chunk}</template>
// 				<script>
// 					(() => {
// 						const template = document.querySelector('template[data-suspense="${id}"]');
// 						const fallback = document.querySelector('[data-fallback="${id}"]');
// 						fallback.replaceWith(template.content);
// 					})()
// 				</script>
// 			`
// 		}
// 	}

// 	//@ts-expect-error async iterable
// 	return new Response(render(), { headers: response.headers })
// })


export const onRequest = sequence(authMiddleware)