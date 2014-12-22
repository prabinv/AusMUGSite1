angular.module('ausmug.app')
  .factory('ServerTime', function($http) {
    return {
      getServerTime: function getServerTime() {
        return $http.get('/api/servertime');
      }
    };
  });
