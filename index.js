const express = require ('express');
const app = express();
var path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// running  all the html pages on the server
app.use(express.static(path.join(__dirname,'pages')))

// lunching the home page
app.get('/home',(req,resp)=>{
  resp.sendFile(path.join(__dirname,'./pages/home.html'));
  });

// sending the signning data to file json
var wd= fs.readFileSync('./pages/sign.json');
var list= JSON.parse(wd);
var wd1= fs.readFileSync('./pages/reservation.json');
var list_reservation= JSON.parse(wd1);
 app.post('/sign', function (req, res) {
   list.push({"username":req.body.username,"user_email":req.body.user_email,"user_password":req.body.user_password});
console.log(JSON.stringify(list));
fs.writeFileSync('./pages/sign.json',JSON.stringify(list,null,5));
res.redirect('/');
  });

// the logging part
  app.post('/home',(req,resp)=>{
    console.log('req' + JSON.stringify(req.body));
  for(var i in list){
      if(req.body.user_email===list[i].user_email && req.body.user_password===list[i].user_password){
         resp.redirect('/home');
      }else{
          console.log('now');
          resp.redirect('/');
      }
  }
  });

  //reservation
  app.post('/reservation',(req,resp)=>{
    list_reservation.push({
          "id": list_reservation.length+1,
          "reserver_username": req.body.reserver_username,
          "reserver_email": req.body.reserver_email,
          "reservation_days": req.body.reservation_days,
          "result": req.body.result,

    });
    console.log(JSON.stringify(list_reservation));
    fs.writeFileSync('./pages/reservation.json',JSON.stringify(list_reservation,null,5));
    resp.redirect('/home');
  });

  //affichage File reservation.json
app.get('/reservationJson',(req,resp)=>{
resp.end(JSON.stringify(list_reservation));
});

//Edit Reservation
var index;
app.get('/edit/:id',(req,resp)=>{
  var {id}= req.params;
  for(var i in list_reservation){
    if(id==list_reservation[i].id){
      console.log('id' + id);
      index=i;
    }
  }
  resp.sendFile(path.join(__dirname,'./pages/modifier.html'));
});
app.get('/afficher',(req,resp)=>{
  resp.end(JSON.stringify(list_reservation[index]));
});

//page Modifier (MODIFIER)
app.post('/modifier',(req,resp)=>{
  console.log('index' + index);
  list_reservation[index].reserver_username=req.body.reserver_username;
  list_reservation[index].reserver_email=req.body.reserver_email;
  list_reservation[index].reservation_days=req.body.reservation_days;
  fs.writeFileSync('./pages/reservation.json',JSON.stringify(list_reservation,null,5));
  resp.redirect('/home');
});

//supprimer
app.get('/delete/:id',(req,resp)=>{
  var {id}= req.params;
  var tableVid=[];
  for(var i in list_reservation){
    if(id!=list_reservation[i].id){
tableVid.push(list_reservation[i]);
console.log('lll' + id + "!==" + list_reservation[i].id);
    }
  }
  list_reservation=tableVid;

  fs.writeFileSync('./pages/reservation.json',JSON.stringify(list_reservation,null,5));
  resp.redirect('/home');
});

//listening to port 3000
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=> console.log(`Server listen to ${PORT}`));