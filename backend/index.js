const express =require("express");
const app=express();
const PORT=process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res)=>{
    return res.json({
        success:true,
        message:"Your server is running ..."
    })
})

app.listen(PORT , ()=>{
    console.log(`app is running at ${PORT}`);
})