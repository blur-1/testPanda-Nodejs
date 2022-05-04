const express = require('express');
const router = express.Router();

//routes
router.get('/', (req,res)=>{
    res.render('index.html', {title: 'First Nodejs webSite'});
});

router.get('/contact', (req,res)=>{
    res.render('contact.html', {title: 'contact page'});
});

module.exports = router;