const Skill = require('../models/skill');



module.exports = {
    index,
    show
};

function index(req, res) {
    let skills = Skill.getAll()
    res.render('skills/index', {
        title: 'string',
        allSkills: skills
    })
}

function show(req, res) {
    console.log(req.params.id);
    let skill = Skill.getOne(req.params.id)
    res.render('skills/show', {
        skill: skill
    })
}