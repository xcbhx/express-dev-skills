const Skill = require('../models/skill');



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }

function edit(req, res) {
    console.log(req.params.id);
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        title: 'skill',
        skill
    })
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    // Models are responible for CRUD'ing the data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'});
}

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