const express= require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.get('/',function(req,res){
    res.render('home');
});

app.listen(process.env.PORT || 3000,()=>console.log('Server started'));