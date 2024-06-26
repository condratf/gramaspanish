import { lucia } from "../../lib/auth"
import { Argon2id } from "oslo/password"
import type { APIContext } from "astro"
import { User, db, eq } from "astro:db"

export async function POST(context: APIContext): Promise<Response> {
	const formData = await context.request.formData();
	const username = formData.get("username");
	if (
		typeof username !== "string" ||
		username.length < 3 ||
		username.length > 31
	) {
		return new Response(JSON.stringify({ error: "Invalid username" }), {
			status: 400
		});
	}
	const password = formData.get("password");
	if (typeof password !== "string" || password.length < 5 || password.length > 255) {
		return new Response(JSON.stringify({ error: "Invalid password" }), {
			status: 400
		});
	}

	const existingUser = (await db.select().from(User).where(eq(User.name, username)))[0]

	if (!existingUser) {
		return new Response(
			JSON.stringify({
				error: "Incorrect username or password"
			}),
			{
				status: 400
			}
		);
	}
  

	const validPassword = await new Argon2id().verify(existingUser.password, password);
	if (!validPassword) {
		return new Response(
			JSON.stringify({
				error: "Incorrect username or password"
			}),
			{
				status: 400
			}
		);
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

	return new Response();
}
