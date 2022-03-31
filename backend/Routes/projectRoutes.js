import express from "express";
import multer from "multer";
import {
  addProject,
  allProject,
  deleteProject,
  updateProject,
} from "../Controller/projectController.js";
import path from "path";
const router = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/addProject", upload.single("projectImage"), addProject);
router.get("/allProject", allProject);
router.delete("/:id", deleteProject);
router.put("/:id", upload.single("projectImage"), updateProject);

export default router;
