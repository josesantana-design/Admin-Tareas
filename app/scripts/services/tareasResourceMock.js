(function(){
'use strict';

angular
  .module('tareasResourceMock', ['ngMockE2E'])
  .run(function ($httpBackend) {
    var tareas = [
      {
        'tareaId': '1',
        'asignadoA': {
          'usuarioId': '1',
          'nombre': 'Steve Rogers',
          'puestoId': '2',
          'imagenPequena': 'images/avatar-1.jpg',
          'imagenGrande': 'images/avatar-1.jpg'
        },
        'descripcion': 'Crear view para listar tareas',
        'estado': 'PENDIENTE',
        'prioridad': 'ALTA'
      },
      {
        'tareaId': '2',
        'asignadoA': {
          'usuarioId': '2',
          'nombre': 'Jose Santana',
          'puestoId': '4',
          'imagenPequena': 'images/avatar-2.jpg',
          'imagenGrande': 'images/avatar-2.jpg'
        },
        'descripcion': 'Crear view para listar tareas',
        'estado': 'HECHO',
        'prioridad': 'MEDIA'
      },
      {
        'tareaId': '3',
        'asignadoA': {
          'usuarioId': '2',
          'nombre': 'Tony Stark',
          'puestoId': '2',
          'imagenPequena': 'images/avatar-1.jpg',
          'imagenGrande': 'images/avatar-1.jpg'
        },
        'descripcion': 'Crear view para listar tareas',
        'estado': 'PENDIENTE',
        'prioridad': 'BAJA'
      }
    ];

  var tareasUrl = '/api/tareas';

  $httpBackend.whenGET(tareasUrl).respond(tareas);
  $httpBackend.whenGET(/views/).passThrough();

  });

})();
