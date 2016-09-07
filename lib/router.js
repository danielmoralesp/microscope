/*
CODIGO ANTES DE "ESPERA DE DATOS"

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'postsList'});

*/


Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});