const express= require('express');
const path = require('path');
// const router = require('Router');


const router = express.Router();


router.get('/',(req,res,next)=>{
res.sendFile(path.join(__dirname,'../','veiws','shop.html'));
})



module.exports = router;