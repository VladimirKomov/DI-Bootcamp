import express from "express";
import {router} from "./routes/books.js";

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use('/', router);