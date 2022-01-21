/**ONLY MEANT FOR LOCAL TESTING
 * USER PASSWORDS ARE STORED IN PLAIN TEXT ON PURPOSE
 */

import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { parsePictureQueryParams, getPictures } from "./pictures";
import { getUserByNameAndPassword, getUserById, IUser } from "./users";
import session from "express-session";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

passport.serializeUser((user, done) => {
  console.log("Inside serialize User");
  console.log(user);

  done(null, user.id);
});

passport.deserializeUser<string>((id, done) => {
  console.log("Inside deserialize User");

  const user = getUserById(id);
  if (!user) done("Could not find User for id", user);
  done(null, user);
});

const strategy = new LocalStrategy((username, password, done) => {
  console.log("inside strategy");

  const user = getUserByNameAndPassword(username, password);
  if (!user)
    return done(null, false, { message: "Incorrect username or password." });
  return done(null, user);
});

passport.use(strategy);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("inside first middleware");
  console.log("Body is", req.body);
  next();
});
app.use(express.static("public"));
app.use(session({ secret: "Bubbleblossom", saveUninitialized: false, resave: false}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/pictures", (req, res) => {
  const params = parsePictureQueryParams(req.query);
  res.send(JSON.stringify(getPictures(params)));
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  console.log("got here!");
  res.set("ok", "true");
  res.send();
});

app.post("/logout", (req, res) => {
  req.logOut();
  res.set("ok", "true").send();
});

app.get("/account/:username/:details", (req, res) => {
  console.log(req.params);

  if (!req.isAuthenticated() || !req.user) {
    res.set("ok", "false").sendStatus(401);
    return;
  }
  const { username, details } = req.params;
  if (username !== req.user.username) {
    res.set("ok", "false").sendStatus(401);
    return;
  }

  if (details === "profile" || details === "art" || details === "invoice" || details === "payment"){
    res.send(JSON.stringify(req.user[details]));
  }
  
});

app.get("/needsAuth", (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user);
  res
    .set("ok", String(req.isAuthenticated()))
    .send(String(req.isAuthenticated()));
});

app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
