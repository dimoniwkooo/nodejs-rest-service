const User = require('./user.model');

// methods
const getAll = async () => User.find({});

const get = async id => User.findOne({ _id: id });

const add = async user => User.create(user);

const upd = async user => {
  return (await User.updateOne({ _id: user.id }, user)).ok ? user : null;
};

const del = async id => (await User.deleteOne({ _id: id })).ok;

module.exports = { getAll, get, add, upd, del };
