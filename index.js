import express from "express";
import cors from "cors";
import CovidRoute from "./routes/CovidRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(CovidRoute);

app.listen(3000, ()=> console.log('Server up and running...'));