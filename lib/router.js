/*
CODIGO ESTATICO

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'postsList'});

*/

/*
CODIGO ESPERA DE DATOS

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

*/


// CODIGO ENRUTADO DINAMICO 
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  /* SIN COMENTARIOS
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
  */
  waitOn: function() {
    // return [Meteor.subscribe('posts'), Meteor.subscribe('comments')]; //Para que funcionara con comentarios
    // return Meteor.subscribe('posts'); // sin notifiaciones
    // return [Meteor.subscribe('posts'), Meteor.subscribe('notifications')] // post y comentarios
    return [Meteor.subscribe('notifications')]
  }
  
});


Router.route('/posts/:_id', {
  name: 'postPage',
  waitOn: function() {
    return Meteor.subscribe('comments', this.params._id);
  },
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});

Router.route('/:postsLimit?', {
  name: 'postsList',
  waitOn: function() {
    var limit = parseInt(this.params.postsLimit) || 5;
    return Meteor.subscribe('posts', {sort: {submitted: -1}, limit: limit});
  },
  data: function() {
    var limit = parseInt(this.params.postsLimit) || 5;
    return {
      posts: Posts.find({}, {sort: {submitted: -1}, limit: limit})
    };
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});


