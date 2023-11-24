const express=require("express");
const url=require("url");
var myrouter=express.Router();
var connection=require("../db/dbconnect");
myrouter.get("/product",function(req,resp){
    connection.query("select * from product",(err,data,fields)=>{
            if(err){
                error.status(500).send("No data found");
            }else{
                  resp.render("index",{proddata:data});
            }
    })
})


myrouter.get("/addproduct",function(req,resp){
    resp.render("add-prod");
})

myrouter.post("/insertprod",function(req,resp){
    connection.query("insert into product values(?,?,?,?)",
    [req.body.pid,req.body.pname,req.body.price,req.body.qty],(err,result)=>{
       if(err){
        resp.status(500).send(
            "no Data FOund"  )
       }else{
        resp.redirect("/product");
       }
    })
})

myrouter.get("/deleteprod/:prodid",function(req,resp){
    connection.query("delete from product where pid=?",[req.params.prodid],(err,result)=>{
        if(err){
            resp.status(500).send(
                "no Data FOund"  )
           }else{
            resp.redirect("/product");
           }
    })
})

myrouter.get("/insert",function(req,resp){
    if(req.query.add=="add"){
          resp.redirect("/addproduct");
    }else if(req.query.add=="find"){
        resp.render("findid");
    }else{
        resp.redirect("/product");
    }
})
myrouter.get("/findit",(req,resp)=>{
    connection.query("select * from product where pid=?",[req.query.f],(err,data,fields)=>
    {
      if(err)
      {
          resp.status(500).send("no data found")
      }
      else{
        console.log("test it"+data);
          resp.render("index",{proddata:data})
      }
    })
})

module.exports=myrouter;

