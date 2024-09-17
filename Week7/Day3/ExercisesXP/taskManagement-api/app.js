import express from "express";
import {taskRouter} from "./routes/taskRouter.js";
import {errorHandler} from "./controllers/taskController.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', taskRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));