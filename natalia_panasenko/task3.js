db.products.updarteMany(
  {
      price: { $lt: 1000 }
  },
  {
      $mul: {
          price: .85,
      },
      $inc: {
          quantity: -1
      }
  }
)