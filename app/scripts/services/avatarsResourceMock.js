(function(){
'use strict';

angular
  .module('avatarsResourceMock', ['ngMockE2E'])
  .run(function ($httpBackend) {
    var avatars = [
      {
        'descripcion': 'Smile',
        'imagenPequena': 'images/avatar-1.jpg',
        'imagenGrande': 'images/avatar-1.jpg',
      },
      {
        'descripcion': 'Red',
        'imagenPequena': 'images/avatar-2.jpg',
        'imagenGrande': 'images/avatar-2.jpg',
      },
      {
        'descripcion': 'Hulk',
        'imagenPequena': 'images/avatar-1.jpg',
        'imagenGrande': 'images/avatar-1.jpg',
      }
    ];

  var avatarsUrl = '/api/avatars';

  $httpBackend.whenGET(avatarsUrl).respond(avatars);
  $httpBackend.whenGET(/views/).passThrough();

  });

})();
