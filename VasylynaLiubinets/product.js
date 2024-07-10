db.products.updateMany()({
    price: {$gt: 1000}},
    {
       $mul: { price: 0.85 },
       $inc: {quantity: 1 }
   });
