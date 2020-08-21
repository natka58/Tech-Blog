const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./controllers');
const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const helpers = require('./utils/helper');
const hbs = exphbs.create({ 
  helpers: {
    format_date: date => {
      return `${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}`;
    }
  } 
});

require('dotenv').config();


const sess = {
 secret: 'Super super secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('./controllers/'));
app.use(routes);

 app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
   sequelize.sync({ force: false });
 });
