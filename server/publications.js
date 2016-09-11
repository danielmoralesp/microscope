Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
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