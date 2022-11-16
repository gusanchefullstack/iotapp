import express from "express";

const app = express();


app.get("/", (req, res) => {
  res.json({ message: "Hello from IoT App Server" });
});

export default app;
