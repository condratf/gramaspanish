export async function getReviews() {
  await new Promise(res => setTimeout(res, 234))
  return Array.from({ length: 14 }).fill(1).map((_, i) => {
    const rating = (Math.random() > 0.49) ? 5 : 4
    
    return ({
      id: i,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam, quam nulla magni tenetur qui ea temporibus iusto quasi magnam!",
      rating: rating,
      name: rating === 5 ? "Joanna Doeva" : "John Doe",
      imgSrc: rating === 5 ? "/assets/jdow.avif" : "/assets/jdoe.avif"
    })
  })
}