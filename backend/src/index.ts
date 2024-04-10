import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected to database!");
});
const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', async (req: Request, res: Response) => {
    res.send({message: "health OK!"})
})

//'my' indiates to the backend that we want to do something with the current logged in user
app.use("/api/my/user", userRoute)

app.listen(4000, () => {
  console.log("server listening on localhost:7000");
});
