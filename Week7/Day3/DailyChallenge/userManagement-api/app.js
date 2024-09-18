import express from 'express';
import {errorHandler} from "./controllers/userController.js";
import {userRouter} from "./routes/userRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", express.static("public"));
app.use('/', userRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));