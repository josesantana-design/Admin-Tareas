(function(){
'use strict';

angular
  .module('AdminTareas', ['ui.router', 'common', 'tareasResourceMock', 'usuariosResourceMock', 'puestosResourceMock', 'avatarsResourceMock'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('inicio', {
        url: '/',
        templateUrl: 'views/bienvenidos.html'
      })
      .state('tareas', {
        url: '/tareas',
        templateUrl: 'views/tareas.html',
        controller: 'tareasCtrl as vm'
      })
      .state('usuarios', {
        url: '/usuarios',
        templateUrl: 'views/usuarios.html',
        controller: 'usuariosCtrl as vm'
      })
      .state('usuarios.usuario', {
        url: '/usuario/:usuarioId',
        templateUrl: 'views/usuario.html',
        controller: 'usuarioCtrl as vm',
        resolve: {
          usuariosResource : 'usuariosResource',
          puestosResource : 'puestosResource',

          usuario: function(usuariosResource, $stateParams){
            var usuarioId = $stateParams.usuarioId;
            return usuariosResource.get({usuarioId: usuarioId}).$promise;
          },
          puestos: function(puestosResource){
            return puestosResource.query().$promise;
          }
        }
      })
        .state('usuarios.usuario.avatars', {
          url: '/avatars',
          templateUrl: 'views/avatars.html',
          controller: 'avatarsCtrl as vm',
           resolve: {
            avatarsResource : 'avatarsResource',
            usuariosResource : 'usuariosResource',
            avatars: function(avatarsResource){
              return avatarsResource.query().$promise;
            },
            usuario: function(usuariosResource, $stateParams){
              var usuarioId = $stateParams.usuarioId;
              return usuariosResource.get({usuarioId: usuarioId}).$promise;
            }
          }
        })
    .state('estadisticas', {
      url: '/estadisticas',
      templateUrl: 'views/estadisticas.html'
    })
  }])

})();
