'use strict';

angular.module('adminuiApp')
  .controller('FormbuilderCtrl', function($scope, $builder, $validator) {
    var checkbox, textbox;
    textbox = $builder.addFormObject('default', {
      component: 'textInput',
      label: 'Name',
      description: 'Your name',
      placeholder: 'Your name',
      required: true,
      editable: false
    });
    checkbox = $builder.addFormObject('default', {
      component: 'checkbox',
      label: 'Pets',
      description: 'Do you have any pets?',
      options: ['Dog', 'Cat']
    });
    $builder.addFormObject('default', {
      component: 'sampleInput'
    });
    $scope.form = $builder.forms['default'];
    $scope.input = [];
    $scope.defaultValue = {};
    $scope.defaultValue[textbox.id] = 'default value';
    $scope.defaultValue[checkbox.id] = [true, true];
    return $scope.submit = function() {
      return $validator.validate($scope, 'default').success(function() {
        return console.log('success');
      }).error(function() {
        return console.log('error');
      });
    };
  });


