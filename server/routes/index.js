var express = require('express');
var router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

module.exports = router;
