const projectsRouter = require('./projects.routes')
const contactRouter = require('./contact.routes')
const blogpostRouter = require('./blogpost.routes')

const Routes = (app) =>{

    app.use('/api/projects', projectsRouter);
    app.use('/api/contact', contactRouter);
    app.use('/api/blogposts', blogpostRouter);

}

module.exports = Routes;