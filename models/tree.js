
const mongoose = require('mongoose');
const treeSchema = new mongoose.Schema({
  treeId: String,
  treeType: String
});
treeSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = mongoose.model('tree', treeSchema);