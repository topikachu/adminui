'use strict';

describe('Controller: FormbuilderCtrl', function () {

  // load the controller's module
  beforeEach(module('adminuiApp'));

  var FormbuilderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormbuilderCtrl = $controller('FormbuilderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
