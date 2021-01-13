const express = require("express");
const bodyParser = require("body-parser");  //import becz extarcting/parsing data from another file.


const app = express();  //it's an app/web create by maker, mandatory v call express() for app.  

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req, res)=>{  //anyone search 3000 | "/", then i wanna "res" to user.
    
     res.send("wlcm to my channel about :) ");  //res.send it's method of nodejs|express   
});
app.get("/about", (req, res)=>{ 

     res.send("<h1> wlcm to my channel about :)  </h1>");
});
          
app.get("/contact", (req, res)=>{ 

     res.send("wlcm to my channel contact :) ");
});


                     // Calculator


app.get("/calculator", (req, res)=>{
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");  //__dirname used for proper path 
});            

app.post("/calculator", (req, res)=>{
  
    let n1 = Number(req.body.v1);    //Number add for removing req data on text format.
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;

    res.send("the sum of two digits : " +sum );
    // res.send("thx 4  ur  lovely post");
     console.log(req.body);         //req show on cmd
});


                // BMI_Calculator



app.get("/bmi", (req, res)=>{
  // console.log(__dirname);
  res.sendFile(__dirname + "/bmi.html");  //__dirname used for proper path 
});            

app.post("/bmi", (req, res)=>{
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.weight);

    let bmi = w1 / (h1*h1);

    res.send("the bmi of ur body is :" +bmi );
});
   
app.listen(3000, (req, res)=>{
    console.log("server is running at port:3000");
});


