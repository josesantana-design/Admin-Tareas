(function(){
'use strict';

angular
  .module('common')
  .factory('avatarsResource', ['$resource', avatarsResource]);

  function avatarsResource($resource){
    return $resource('/api/avatars/:avatarId');
  }

}());
