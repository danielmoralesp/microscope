Meteor.publish('posts', function() {
  return Posts.find();
});

/* PUBLISH ANTES DE COMENTARIOS CON SEGURIDAD
Meteor.publish('comments', function() {
  return Comments.find();
});
*/

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});