// Handlebars.js app set up
const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helper');
const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connections');





const app = express();
const PORT = process.env.PORT || 3001;

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: { expires: 10 * 60 *1000
  },
  resave: true,
  saveUninitialized: true,
  store: new 
  SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// Handlebar.js app template 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));




app.use(routes);
// app.use(require("./controllers/"));

// connection to db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

