const express= require('express');
const path = require('path');


const router = express.Router();


router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','veiws','contact.html'))
    })
    
    router.post('/sucess',(req,res,next)=>{
        res.send('Form Sucessfully Submitted')
        })

module.exports = router;