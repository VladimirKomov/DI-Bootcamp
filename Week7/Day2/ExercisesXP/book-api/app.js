import express from "express";
import {routerBooks} from "./routes/routeBooks.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use('/api', routerBooks);