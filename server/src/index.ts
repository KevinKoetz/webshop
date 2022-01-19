import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import {parsePictureQueryParams, getPictures} from "./pictures";


const app = express();
const port = 5000;

app.get("/pictures", (req, res) => {
    const params = parsePictureQueryParams(req.query);
    res.send(JSON.stringify(getPictures(params)))
})

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
