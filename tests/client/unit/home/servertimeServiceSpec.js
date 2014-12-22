'use strict';

describe('Service: ServerTime', function() {
  var currentTime = new Date(),
    service, $httpBackend;

  beforeEach(module('ausmug.app'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    service = $injector.get('ServerTime');
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('should get the time from the API', function(done) {
    $httpBackend.whenGET(/^\/api\/servertime/i).respond(200, {
      currentServerTime: currentTime
    });
    var serverTimeResponse = service.getServerTime();

    expect(serverTimeResponse).toBeDefined();
    serverTimeResponse.then(function(response) {
      expect(response.data.currentServerTime).toEqual(currentTime);
    }).finally(function() {
       done();
   });

   $httpBackend.flush();

 });

});
