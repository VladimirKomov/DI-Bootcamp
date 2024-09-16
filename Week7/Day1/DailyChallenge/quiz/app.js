import express from "express";
import {router} from "./routes/quizRouter.js";

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {console.log("Server started on port: " + PORT)});

app.use("/", express.static("public"));

app.use('/', router);