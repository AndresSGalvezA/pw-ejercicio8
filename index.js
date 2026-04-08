var express = require('express');
var router = express.Router();

router.get('/api/health', function(req, res) {
  res.json({ ok: true });
});

router.post('/api/login', function(req, res) {
  const { email, password } = req.body;

  if (email === 'demo@demo.com' && password === '123456') {
    return res.json({ ok: true, name: 'Carlos' });
  }

  return res.status(401).json({
    ok: false,
    message: 'Credenciales inválidas'
  });
});

module.exports = router;