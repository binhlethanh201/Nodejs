const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override');
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//connect to database
db.connect();


app.use(methodOverride('_method'));
//HTTP logger
// app.use(morgan('combined'));

// ✅ Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Set view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// ✅ Routes
const courseRouter = require("./routes/course");
app.use("/courses", courseRouter);

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers:{
        sum: (a,b) => a+b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

// cau hinh file tinh
app.use(express.static(path.join(__dirname, "public")));
