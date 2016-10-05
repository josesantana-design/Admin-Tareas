(function(){
'use strict';

angular
  .module('common')
  .factory('puestosResource', ['$resource', puestosResource]);

  function puestosResource($resource){
    return $resource('/api/puestos/:puestoId');
  }

}());
