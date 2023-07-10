const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");



const app = express();

let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list",{
    ListTitle: day,
    newListItems: items
  });

  //<%=ejs%>
  //var a= 3+5;
  //res.send("Hello");
  //res.send(a);

  // var currentDay = today.getDay();
  // var day = "";
  // switch (currentDay) {
  //
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //   console.log("Error:currentDay is equal to: "+currentDay);
  // }
  // res.render("list",{KindOfDay: day});

  // if(today.getDay()==6||today.getDate()==0){
  //   day="weekend";
  //   res.render("list",{KindOfDay: day});
  //
  // //   res.write("<h1>YAy it's the weekend!!</h1>");
  // }else{
  //   day="weekday";
  //
  // //   res.write("<p>It is not weekend</p>");
  // //   res.write("<h1>Oooo! I have to work</h1>");
  // //   res.send();
  // //res.sendFile(__dirname+"/index.html");
  // res.render("list",{KindOfDay: day});
  //
  //  }

});

app.post("/",function(req,res){
  let item=req.body.newItem;

  if(req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{ListTitle: "work List",newListItems: workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});
app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
