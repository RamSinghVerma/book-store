const express = require('express')
const router = express.Router();

router.get('/', (req, res, next)=>{
    let products = [];
    for(let i=0; i<10; i++) {
        let productId = i+1;
        let row = { id: productId, productName: "product-"+productId, price: productId*10 }
        products.push(row);
    }
    res.status(200).json(products);
})

module.exports = router;
