
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import authRoutes from "./backend/routes/authRoute.js";
import secretsRoutes from "./backend/routes/secretsRoute.js";
import { connectDB } from "./backend/config/db.js";
import "./backend/config/passport.js";




const app = express();
const PORT = 3000;

// Database connection
connectDB();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//cooooooooooockies
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/", authRoutes);
app.use("/", secretsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`
        
    );
  });