import express from "express";
import router from "./router.mjs";
import { myMiddlware, myMiddlware2 } from "./modules/middleware.mjs"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello from IoT App Server" });
});
app.use("/api", myMiddlware, myMiddlware2 ,router);

export default app;
