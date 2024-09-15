import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use('/', router);
