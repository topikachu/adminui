'use strict';

angular.module('adminuiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'builder', 'builder.components','validator.rules'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/formbuilder', {
        templateUrl: 'partials/formbuilder.html',
        controller: 'FormbuilderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  }).run(function ($builder){
      return $builder.registerComponent('sampleInput', {
        group: 'from html',
        label: 'Sample',
        description: 'From html template',
        placeholder: 'placeholder',
        required: false,
        validationOptions: [
          {
            label: 'none',
            rule: '/.*/'
          }, {
            label: 'number',
            rule: '[number]'
          }, {
            label: 'email',
            rule: '[email]'
          }, {
            label: 'url',
            rule: '[url]'
          }
        ],
        templateUrl: 'partials/template.html',
        popoverTemplateUrl: 'partials/popoverTemplate.html'
      });
    
  });