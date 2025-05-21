const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');


function route(app){

    
    
    //news uri
    // app.get('/news', (req, res) => {
    //   res.render('news');
    // });

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    //search uri
    // app.get('/search', (req, res) => {
    //   res.render('search');
    // });
    
    //search post
    // app.post('/search', (req, res) => {
    //   res.render('search');
    // });

    //home uri
    // app.get('/', (req, res) => {
    //   res.render('home');
    // });
     app.use('/', siteRouter);
    
}
module.exports = route;