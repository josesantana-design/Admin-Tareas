(function(){
  'use strict';

angular
.module('AdminTareas')
.controller('usuarioCtrl', ['usuario', 'puestos', '$rootScope','$state' , usuarioCtrl]);

   function usuarioCtrl(usuario, puestos, $rootScope, $state) {
     var vm = this;
     vm.usuario = usuario;
     vm.puestos = puestos;

     vm.cancelar = function(){
       $rootScope.$emit('cancelarEdicionUsuario');
       $state.go('usuarios');
     }
  }
}());
