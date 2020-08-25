const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    userName: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;