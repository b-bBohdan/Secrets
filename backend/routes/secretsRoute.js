import express from "express";
import { getSecrets, submitSecret, renderSubmitPage } from "../controllers/secretsController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.ejs");
  });
  
router.get("/secrets", isAuthenticated, getSecrets);
router.get("/submit", isAuthenticated, renderSubmitPage);
router.post("/submit", isAuthenticated, submitSecret);


export default router;