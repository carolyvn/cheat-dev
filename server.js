const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3301;

const db = require('./models');

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// require('./controllers/home-routes')(app);
// require('./controllers/index')(app);
// require('./controllers/api/index')(app);
// require('./controllers/api/user-routes')(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`, PORT, PORT
    )
  );
});

// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log(`===> Listening on port ${PORT}. Visit http://localhost:${PORT} in your brower`, PORT, PORT);
//   });
// });