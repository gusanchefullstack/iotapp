import { Router } from "express";

const router = Router();

// Organization Routes
router.get("/organization", (req, res) => {
  res.json({ message: "all organizations" });
});
router.get("/organization/:id", (req, res) => {
  res.json({ message: "one organization" });
});
router.post("/organization", (req, res) => {
  res.json({ message: "organization create response" });
});
router.put("/organization/:id", (req, res) => {
  res.json({ message: "organization update response" });
});
router.delete("/organization/:id", (req, res) => {
  res.json({ message: "organization delete response" });
});

// Contract Routes
router.get("/contract", (req, res) => {
  res.json({ message: "all contracts" });
});
router.get("/contract/:id", (req, res) => {
  res.json({ message: "one contract" });
});
router.post("/contract", (req, res) => {
  res.json({ message: "contract create response" });
});
router.put("/contract/:id", (req, res) => {
  res.json({ message: "contract update response" });
});
router.delete("/contract/:id", (req, res) => {
  res.json({ message: "contract delete response" });
});

// Sites Routes
router.get("/site", (req, res) => {
  res.json({ message: "all site" });
});
router.get("/site/:id", (req, res) => {
  res.json({ message: "one site" });
});
router.post("/site", (req, res) => {
  res.json({ message: "site create response" });
});
router.put("/site/:id", (req, res) => {
  res.json({ message: "site update response" });
});
router.delete("/site/:id", (req, res) => {
  res.json({ message: "site delete response" });
});

// Measuring Point routes
router.get("/measuringpoint", (req, res) => {
  res.json({ message: "all measuringpoint" });
});
router.get("/measuringpoint/:id", (req, res) => {
  res.json({ message: "one measuringpoint" });
});
router.post("/measuringpoint", (req, res) => {
  res.json({ message: "measuringpoint create response" });
});
router.put("/measuringpoint/:id", (req, res) => {
  res.json({ message: "measuringpoint update response" });
});
router.delete("/measuringpoint/:id", (req, res) => {
  res.json({ message: "measuringpoint delete response" });
});

// Board Routes
router.get("/board", (req, res) => {
  res.json({ message: "all board" });
});
router.get("/board/:id", (req, res) => {
  res.json({ message: "one board" });
});
router.post("/board", (req, res) => {
  res.json({ message: "board create response" });
});
router.put("/board/:id", (req, res) => {
  res.json({ message: "board update response" });
});
router.delete("/board/:id", (req, res) => {
  res.json({ message: "board delete response" });
});

// Sensor routes
router.get("/sensor", (req, res) => {
  res.json({ message: "all sensor" });
});
router.get("/sensor/:id", (req, res) => {
  res.json({ message: "one sensor" });
});
router.post("/sensor", (req, res) => {
  res.json({ message: "sensor create response" });
});
router.put("/sensor/:id", (req, res) => {
  res.json({ message: "sensor update response" });
});
router.delete("/sensor/:id", (req, res) => {
  res.json({ message: "sensor delete response" });
});

export default router;
