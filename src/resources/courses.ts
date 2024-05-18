const courses = Array.from({ length: 7 })
.fill({})
.map((_, i) => ({
  id: i,
  title: 'Super Course',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias sae pe sapiente tempore at temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias sae pe sapiente tempore at temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias sae pe sapiente tempore at temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias sae pe sapiente tempore at temporibus.',
  quantity: '10 lessons',
  price: '387 ₣',
}))

export async function getCoursesData() {
  await new Promise(res => setTimeout(res, 234))
  return courses
}

export async function getCourse(id?: string) {
  if (!id) return null
  const course = courses.find(v => v.id === Number(id))
  if (!course) return null

  return course
}