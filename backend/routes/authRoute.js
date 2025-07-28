import express from "express";
import passport from "passport";
import { register, loginGoogle } from "../controllers/authController.js";


const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login.ejs");
  });
  
  router.get("/register", (req, res) => {
    res.render("register.ejs");
  });

  router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

router.post("/register", register);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

router.get("/logout", (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

export default router;