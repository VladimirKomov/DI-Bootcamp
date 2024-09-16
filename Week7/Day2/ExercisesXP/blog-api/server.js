import * as console from "node:console";
import {router} from "./routes/postRouter.js";
import express from "express";


const app = express();
const PORT = 3000;
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/', router);