db.products.updarteMany(
  {
      price: { $lt: 1000 },
      balance: { $gtr: 0 },
      quantity: { $gtr: 0 }
  },
  {
      $mul: {
          balance: .15,
          quantity: -1
      }
  }
)