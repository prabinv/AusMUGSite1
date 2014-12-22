angular.module('ausmug.app')
  .controller('HomeCtrl', function(ServerTime) {
    var ctrl = this;
    ServerTime.getServerTime().then(function(response) {
      ctrl.currentTime = new Date(response.data.currentServerTime);
    });
});
