// server.js
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Flag value (challenge)
const FLAG = "CTF404{L4tih4n_C00K13s_H1jacking_0101012317}";

// POST /do-login -> set cookies: flag and found=false
app.post("/do-login", (req, res) => {
  // set cookie 'flag' and 'found=false'
  // flag is NOT HttpOnly so JS can read it (educational only)
  res.cookie("flag", FLAG, {
    maxAge: 1000 * 60 * 60,
    httpOnly: false,
    sameSite: "Lax",
  });
  res.cookie("found", "false", {
    maxAge: 1000 * 60 * 60,
    httpOnly: false,
    sameSite: "Lax",
  });
  res.redirect("/profile.html");
});

// convenience endpoint: show cookies server saw (for debugging)
app.get("/whoami", (req, res) => {
  res.type("text").send(`Server-seen cookies: ${JSON.stringify(req.cookies)}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CTF cookies app running on http://localhost:${PORT}`);
});
