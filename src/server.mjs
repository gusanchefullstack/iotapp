import express from "express";
import { protect } from "./modules/auth.mjs";
import router from "./router.mjs";
import { signingUser, createNewUser } from "./handlers/user.mjs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello from IoT App Server" });
});

app.post("/signup", createNewUser);
app.post("/signin", signingUser);
app.use("/api", protect, router);

export default app;
