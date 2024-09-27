import express from "express";
import * as console from "node:console";
import cors from "cors";


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

app.get("/api/hello", (req, res) => {
    const data = {
        message: "Hello From Express"
    }
    res.send(JSON.stringify(data));
})

app.post("/api/world", (req, res) => {
    const post = req.body.post;
    console.log('Received POST', post);
    res.send({response: `I received your POST request. This is what you sent me: ${post}`});
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});