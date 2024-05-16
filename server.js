const express=require("express")
const app=express()
const port=5000;

// mongodb+srv://AyselMammadova:<password>@cluster0.dzqo4bs.mongodb.net/
app.listen(port,()=>{
    console.log(`Port is running ${port}`);
})