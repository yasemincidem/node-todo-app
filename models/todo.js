const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    userName: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});
mongoose.model('Todo', TodoSchema);