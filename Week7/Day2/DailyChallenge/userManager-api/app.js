import express from "express";
import {routerUser} from "./routes/userRouter.js";
import {errorHandler} from "./controllers/userController.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', routerUser);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));