const treesRouter = require('express').Router();
const Tree = require('../models/tree');


treesRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const trees = await Tree.find({});
    return res.json(trees.map((tree) => tree.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

treesRouter.post('/', (req, res) => {
  const auth = req.currentUser;

  if (auth) {
    const tree = new Tree(req.body);
    const savedTree = tree.save();

    return res.status(201).json(savedTree);
  }
  return res.status(403).send('Not authorized');
});

module.exports = treesRouter;
