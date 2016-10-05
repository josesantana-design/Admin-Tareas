(function(){
'use strict';

angular
  .module('usuariosResourceMock', ['ngMockE2E'])
  .run(function ($httpBackend) {
    var usuarios = [
      {
        'usuarioId' : '1',
        'nombre' : 'Steve Rogers',
        'puestoId': '2',
        'imagenPequena': 'images/avatar-1.jpg',
        'imagenGrande': 'images/avatar-1.jpg'
      },
      {
        'usuarioId' : '2',
        'nombre' : 'Hulk',
        'puestoId': '3',
        'imagenPequena': 'images/avatar-2.jpg',
        'imagenGrande': 'images/avatar-2.jpg'
      }
    ];

  var usuariosUrl = '/api/usuarios';

  $httpBackend.whenGET(usuariosUrl).respond(usuarios);

  var editarRegex = new RegExp(usuariosUrl + '/[0-9][0-9]*','');
  $httpBackend.whenGET(editarRegex).respond(function(method, url, data){
    var usuario = {'usarioId': 0};
    var parameters = url.split('/');
    var lenght = parameters.lenght;
    var id = parameters[lenght -1];

    if(id > 0) {
      for (var i = 0; i < usuarios.length; i++) {
        if(usuarios[i].usuarioId == id){
          usuario = usuarios[i];
          break;
        }
      }
    }

    return [200, usuario, {}];
  });

  $httpBackend.whenGET(/views/).passThrough();

  });

})();
