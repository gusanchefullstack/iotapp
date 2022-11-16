import express from "express";
import router from "./router.mjs";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from IoT App Server" });
});
app.use("/api", router);

export default app;
