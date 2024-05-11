import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res)=>{
    console.log("Hello world");
})


app.post("/register", (req, res)=>{
    res.send(req.ip);
})








app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})