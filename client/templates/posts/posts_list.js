/* 
INICIO CODIGO MANUAL DE LOS PRIMEROS CAPITULOS

var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});

FIN CODIGO MANUAL DE LOS PRIMEROS CAPITULOS 
*/


/* SE ELIMINA PORQUE EN LA RUTA SE PUSO EL CONTEXTO DE DATOS DE LA PAGINACION
Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});

*/