const authRoutes = require('./authRoutes');
const userRoutes = require('./userRouters');
const dbRoutes = require('./dbRoutes');
const formRoutes = require('./formRoutes');
const { swaggerUi, specs } = require('../swagger'); // Import Swagger configuration
const projectRoutes = require('./projectRoutes');

const { ensureAuthenticated } = require('../middlewear/authMiddlewear');

module.exports = (app) => {
    // Swagger documentation route
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    app.use((req, res, next) => {
        const publicRoutes = ['/api/auth/login', '/api/auth/signup', '/api/auth/google', '/api/auth/google/callback', '/api/auth/status'];
        if (publicRoutes.includes(req.path)) {
            return next();
        }
        ensureAuthenticated(req, res, next);
    });

    // Database-related routes
    app.use('/api/db', dbRoutes);

    // Authentication routes
    app.use('/api/auth', authRoutes);

    // User-related routes
    app.use('/api/users', userRoutes);

    // Project routes
    app.use('/api/projects', projectRoutes);

    //form routes
    app.use('/api/forms',formRoutes);




    // Project routes
    app.use('/projects', projectRoutes);

    // Sample API endpoint
    app.get('/api', (req, res) => {
        res.json({ message: 'Hello From Backend' });
    });
};
