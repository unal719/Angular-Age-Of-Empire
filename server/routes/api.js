const express = require('express');
const router = express.Router();
const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('db.json', 'utf8'));

router.get('/', (req, res) => {
  res.send('api works11');
});

router.get('/units', (req, res) => {
  res.status(200).send(obj);
});
router.get('/unit/:id', (req, res) => {
  const id = req.params.id;
  const unit = obj.units.find(unitItem => unitItem.id == id);
  res.status(200).send(unit);
});

module.exports = router;
