var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with '/skills'


/* GET users listing. */
//GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new <- Define BEFORE show route
router.get('/new', skillsCtrl.new);
// Get /skills/:id 
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// GET /skills/edit/:id
router.get('/edit/:id', skillsCtrl.edit);

module.exports = router;
