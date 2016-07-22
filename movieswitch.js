var getReview = function (movie) {
  switch (movie) {
    case 'Toy Story 2':
      review = 'Great story. Mean prospector.'
      break
    case 'Finding Nemo':
      review = 'Cool animation, and funny turtles.'
      break
    case 'The Lion King':
      review = 'Great songs.'
      break
    default:
      review = 'I don\'t know!'
  }
  return review
}
