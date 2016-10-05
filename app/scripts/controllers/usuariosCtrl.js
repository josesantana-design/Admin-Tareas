(function(){
  'use strict';

angular
.module('AdminTareas')
.controller('usuariosCtrl', ['usuariosResource', '$rootScope', usuariosCtrl]);

   function usuariosCtrl(usuariosResource, $rootScope) {
     var vm = this;

     //Obtener Usuarios
     var obtenerUsuarios = function(){
       usuariosResource.query(function(data){
         vm.usuarios = data;
       });
     }
     obtenerUsuarios();

     //Buscar Usuarios
     vm.buscar = '';

     //Nuevo Usuario
     vm.panelusuarioVisible = false;

     vm.mostrarPanelUsuario = function(mostrar){
       vm.panelusuarioVisible = mostrar;
     }

     $rootScope.$on('cancelarEdicionUsuario', function(event, args){
       vm.mostrarPanelUsuario(false);
     });
  }
})();
