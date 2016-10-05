(function(){
'use strict';

angular
  .module('common')
  .factory('usuariosResource', ['$resource', usuariosResource]);

  function usuariosResource($resource){
    return $resource('/api/usuarios/:usuarioId');
  }

}());
