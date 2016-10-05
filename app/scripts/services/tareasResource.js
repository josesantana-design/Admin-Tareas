(function(){
'use strict';

angular
  .module('common')
  .factory('tareasResource', ['$resource', tareasResource]);

  function tareasResource($resource){
    return $resource('/api/tareas/:tareaId');
  }

}());
