const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    techs: { type: String, required: true },
    picture: { type: String, required: true },
    url: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;