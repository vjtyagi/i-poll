'use strict';

describe('Controller: ShowpollCtrl', function () {

  // load the controller's module
  beforeEach(module('iPollApp'));

  var ShowpollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowpollCtrl = $controller('ShowpollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
