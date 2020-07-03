const express = require("express");
const accepts = require("accepts");
const useragent = require("express-useragent");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const iplog = require("./models/iplog");
const geoip = require("geoip-lite");
const app = express();
mongoose.connect("mongodb://localhost/ipLogger", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
iplog.collection.deleteMany();
ShortUrl.collection.deleteMany();
app.set("view engine", "ejs");
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  const iplogs = await iplog.find();
  res.render("index", { shortUrls: shortUrls, ips: iplogs });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });

  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  var source = req.headers["user-agent"];
  var ua = await useragent.parse(source);
  var ipad = req.ip;
  var geo = geoip.lookup(ipad);
  var lang = accepts(req).languages();
  await iplog.create({
    ip: ipad,
    useragent_details: ua,
    location: ipad,
    language: lang,
  });
  console.log(ipad);
  console.log(ua);
  console.log(geo);
  console.log(lang);
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
  // res.send(ua);
});

app.listen(process.env.PORT || 5000);
