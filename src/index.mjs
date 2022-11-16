import app from "./server.mjs";
const port = 3000;

app.listen(port, () => {
  console.log(`IoT App server based on Express.js running from port ${port}`);
});
