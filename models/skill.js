const skills = [
    {id: 125223, skill: 'HTML', done: true, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
    {id: 127904, skill: 'CSS', done: true, description:'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML.'},
    {id: 139608, skill: 'JavaScript', done: true, description: 'JavaScript is a lightweight interpreted programming language.'},
    {id: 145620, skill: 'Node.js', done: false, description:'Node. js (Node) is an open source development platform for executing JavaScript code server-side.'},
    {id: 145622, skill: 'Django', done: false, description:'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.'},
    {id: 145625, skill: 'MongoDB', done: false, description:'MongoDB is an open source NoSQL database management program.'},
    {id: 145628, skill: 'MongooseJS', done: false, description:'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.'}
  ];

  module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    id -parseInt(id)
    // Find the index of the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
function create(skill){
  // Add the id
  skill.id = Date.now() * 1000000;
  skill.done = false;
  skills.push(skill);
}

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The array.prototype.find iterator method is 
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id); 
    // todo (parameter) todo.id(property)
  }


  function getAll() {
    return skills;
  }