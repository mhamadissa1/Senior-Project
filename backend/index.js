import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import 'dotenv/config';



const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res)=>{
    console.log("Hello world");
})


app.get('/markets', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.CMC_KEY,
                'Accept': 'application/json'
            },
            params: {
                start: 1,
                limit: 1,
                convert: 'USD'
            }
        });
        res.json(response.data);
        
    } catch (error) {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            res.status(504).send("The request was made but no response was received");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            res.status(500).send(error.message);
        }
    }
});





app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})