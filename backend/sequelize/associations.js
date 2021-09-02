module.exports = function makeAssociations(sequelize) {
  const { post, user, comment, like } = sequelize.models;

  user.hasMany(post);
  post.belongsTo(user);

  user.hasMany(comment);
  comment.belongsTo(user);

  post.hasMany(comment);
  comment.belongsTo(post);

  user.hasMany(like);
  like.belongsTo(user);

  post.hasMany(like);
  like.belongsTo(post);
};
