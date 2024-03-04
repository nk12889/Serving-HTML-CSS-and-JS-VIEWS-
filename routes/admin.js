const express= require('express');
const path = require('path');

const rootDir = require('../util/path')


const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log(1)
    res.sendFile(path.join(__dirname,'../','veiws','add-product.html'))
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})



module.exports = router;