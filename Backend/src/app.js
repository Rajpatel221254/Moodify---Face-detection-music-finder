const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cookieParser());
// allow both production and local frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://moodify-face-detection-music-finder-rajpatel221254s-projects.vercel.app/",
  "https://moodify-face-detection-music-finder.vercel.app/", // adjust port if your frontend runs elsewhere
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

/**
 * Import Routers
 */
const authRouter = require("./routes/auth.routes");
const songRouter = require("./routes/song.routes");

/**
 * Using Routers
 */
app.use("/api/auth", authRouter);
app.use("/api/songs", songRouter);

module.exports = app;
