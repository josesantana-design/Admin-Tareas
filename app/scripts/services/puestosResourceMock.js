(function(){
'use strict';

angular
  .module('puestosResourceMock', ['ngMockE2E'])
  .run(function ($httpBackend) {
    var puestos = [
      {
        'puestoId': '1',
        'descripcion': 'Programador Junior'
      },
      {
        'puestoId': '2',
        'descripcion': 'Soporte'
      },
      {
        'puestoId': '3',
        'descripcion': 'Analista'
      }
    ];

  var puestosUrl = '/api/puestos';

  $httpBackend.whenGET(puestosUrl).respond(puestos);
  $httpBackend.whenGET(/views/).passThrough();

  });

})();
