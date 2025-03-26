import express from "express";
import cors from "cors";

import { createUser, getUser, listUser, removeUser, updateUser } from "./controllers/UserControllers";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/user", listUser);
app.get("/user/:id", getUser);
app.patch("/user/:id", updateUser);
app.post("/user", createUser);
app.delete("/user/:id", removeUser);    


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});