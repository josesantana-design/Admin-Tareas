(function(){
  'use strict';

angular
.module('AdminTareas')
.controller('avatarsCtrl', ['avatars' ,'usuario', '$rootScope', avatarsCtrl]);

   function avatarsCtrl(avatars, usuario, $rootScope) {
     var vm = this;
     
     vm.avatars = avatars;
     vm.usuario = usuario;
  }

}());