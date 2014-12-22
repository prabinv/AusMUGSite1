'use strict';

describe('Controller: HomeCtrl', function() {
  var $controller, HomeCtrl, scope, ServerTime, actualTime;

  beforeEach(module('ausmug.app'));

  beforeEach(inject(function($injector) {
    var $rootScope = $injector.get('$rootScope');
    actualTime = new Date();
    scope = $rootScope.$new();
    $controller = $injector.get('$controller');
    ServerTime = $injector.get('ServerTime');
    spyOn(ServerTime, 'getServerTime').and.returnValue({
      then: function(cb) {
        return cb({
          data: {
            currentServerTime: actualTime
          }
        });
      }
    });
    HomeCtrl = $controller('HomeCtrl', { scope: scope });
  }));

  it('should exist', function() {
    expect(HomeCtrl).toBeDefined();
  });

  it('should set the currentTime property to service response', function() {
    expect(HomeCtrl.currentTime).toEqual(actualTime);
  });
});
