// File Import Declarations
const router = require('express').Router();
const apiRoutes = require('./api');

// dictates url to /api (on local - localhost:3001/api)
router.use('/api', apiRoutes);

// catch all for all other routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export for external
module.exports = router;