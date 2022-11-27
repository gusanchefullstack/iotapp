import { Router } from "express";
import { body, param } from "express-validator";
import {
  getOrganizations,
  getOneOrganization,
  createOrganization,
  updateOrganization,
} from "./handlers/organization.mjs";
import { handleInputErrors } from "./modules/middleware.mjs";

const router = Router();

// Organization Routes
router.get("/organization", getOrganizations);

router.get(
  "/organization/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  getOneOrganization
);
router.post(
  "/organization",
  body("name")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("nit")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength(10)
    .withMessage("Invalid length")
    .trim(),
  body("phone")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 15 })
    .withMessage("Invalid length")
    .trim(),
  body("address")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 50 })
    .withMessage("Invalid length")
    .trim(),
  handleInputErrors,
  createOrganization
);
router.put(
  "/organization/:id",
  param("id").isUUID().withMessage("Invalid format"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("nit")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength(10)
    .withMessage("Invalid length")
    .trim(),
  body("phone")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 15 })
    .withMessage("Invalid length")
    .trim(),
  body("address")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 50 })
    .withMessage("Invalid length")
    .trim(),
  handleInputErrors,
  updateOrganization
);
router.delete(
  "/organization/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "organization delete response" });
  }
);

// Contract Routes
router.get("/contract", (req, res) => {
  res.json({ message: "all contracts" });
});
router.get(
  "/contract/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "one contract" });
  }
);
router.post(
  "/contract",
  body("subscription")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 10 })
    .withMessage("Invalid Length")
    .trim(),
  body("starDate")
    .exists()
    .withMessage("Missing value")
    .isDate()
    .withMessage("Invalid format")
    .trim(),
  body("endDate")
    .exists()
    .withMessage("Missing value")
    .isDate()
    .withMessage("Invalid format")
    .trim(),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "contract create response" });
  }
);
router.put(
  "/contract/:id",
  param("id").isUUID().withMessage("Invalid format"),
  body("subscription")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 10 })
    .withMessage("Invalid Length")
    .trim(),
  body("starDate").optional().isDate().withMessage("Invalid format").trim(),
  body("endDate").optional().isDate().withMessage("Invalid format").trim(),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "contract update response" });
  }
);
router.delete(
  "/contract/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "contract delete response" });
  }
);

// Sites Routes
router.get("/site", (req, res) => {
  res.json({ message: "all site" });
});
router.get(
  "/site/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "one site" });
  }
);
router.post(
  "/site",
  body("name")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("address")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("city")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 50 })
    .withMessage("Invalid length"),
  body("zipcode")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 6 })
    .withMessage("Invalid length"),
  body("country")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 50 })
    .withMessage("Invalid length"),
  body("phone")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 15 })
    .withMessage("Invalid length"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "site create response" });
  }
);
router.put(
  "/site/:id",
  param("id").isUUID().withMessage("Invalid format"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("address")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("city")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 50 })
    .withMessage("Invalid length"),
  body("zipcode")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 6 })
    .withMessage("Invalid length"),
  body("country")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 50 })
    .withMessage("Invalid length"),
  body("phone")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 10, max: 15 })
    .withMessage("Invalid length"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "site update response" });
  }
);
router.delete(
  "/site/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "site delete response" });
  }
);

// Measuring Point routes
router.get("/measuringpoint", (req, res) => {
  res.json({ message: "all measuringpoint" });
});
router.get(
  "/measuringpoint/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "one measuringpoint" });
  }
);
router.post(
  "/measuringpoint",
  body("name")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("lat")
    .exists()
    .withMessage("Missing value")
    .isDecimal()
    .withMessage("Invalid format")
    .trim(),
  body("lng")
    .exists()
    .withMessage("Missing value")
    .isDecimal()
    .withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "measuringpoint create response" });
  }
);
router.put(
  "/measuringpoint/:id",
  param("id").isUUID().withMessage("Invalid format"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("lat").optional().isDecimal().withMessage("Invalid format").trim(),
  body("lng").optional().isDecimal().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "measuringpoint update response" });
  }
);
router.delete(
  "/measuringpoint/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "measuringpoint delete response" });
  }
);

// Board Routes
router.get("/board", (req, res) => {
  res.json({ message: "all board" });
});
router.get(
  "/board/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "one board" });
  }
);
router.post(
  "/board",
  body("name")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("hardwareVersion")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 10 })
    .withMessage("Invalid length")
    .trim(),
  body("softwareVersion")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 10 })
    .withMessage("Invalid length")
    .trim(),
  body("status").exists().isIn(["CREATED", "ACTIVE", "SUSPENDED", "DELETED"]),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "board create response" });
  }
);
router.put(
  "/board/:id",
  param("id").isUUID().withMessage("Invalid format"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("hardwareVersion")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 10 })
    .withMessage("Invalid length")
    .trim(),
  body("softwareVersion")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 10 })
    .withMessage("Invalid length")
    .trim(),
  body("status").optional().isIn(["CREATED", "ACTIVE", "SUSPENDED", "DELETED"]),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "board update response" });
  }
);
router.delete(
  "/board/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "board delete response" });
  }
);

// Sensor routes
router.get("/sensor", (req, res) => {
  res.json({ message: "all sensor" });
});
router.get(
  "/sensor/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "one sensor" });
  }
);
router.post(
  "/sensor",
  body("name")
    .exists()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("sensorType").exists().isIn(["TEMPERATURE", "HUMIDITY", "PH", "FLOW"]),
  body("status").exists().isIn(["CREATED", "ACTIVE", "SUSPENDED", "DELETED"]),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "sensor create response" });
  }
);
router.put(
  "/sensor/:id",
  param("id").isUUID().withMessage("Invalid format"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid format")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length")
    .trim(),
  body("sensorType").optional().isIn(["TEMPERATURE", "HUMIDITY", "PH", "FLOW"]),
  body("status").optional().isIn(["CREATED", "ACTIVE", "SUSPENDED", "DELETED"]),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "sensor update response" });
  }
);
router.delete(
  "/sensor/:id",
  param("id").isUUID().withMessage("Invalid format"),
  handleInputErrors,
  (req, res) => {
    res.json({ message: "sensor delete response" });
  }
);

export default router;
