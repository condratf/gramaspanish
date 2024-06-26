const reviews = Array.from({ length: 2 }).fill(1).map((_, i) => {
  const rating = i === 0 ? 5 : 4
  return ({
    id: i,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam, quam nulla magni tenetur qui ea temporibus iusto quasi magnam!",
    rating: rating,
    name: rating === 5 ? "Joanna Doeva" : "John Doe",
    imgSrc: "/assets/avatar.png"
  })
})

export type Review = typeof reviews[0]

export function getReviews(): Array<Promise<Review>> {
  return reviews.map(
    (review, ix) => new Promise(res => setTimeout(() => res(review), Number(`${ix}99`)))
  )
}