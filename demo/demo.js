'use strict';

var app = angular.module('demo', ['ngSanitize', 'mohsen1.json-schema-view']);

app.controller('MainCtrl', function ($scope) {

  // A simple schema with only on string property
  $scope.string = {
    title: 'Person',
    description: 'A person in our database',
    properties: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'age',
        type: 'integer',
        format: 'int64',
        minimum: 0
      },
      {
        name: 'email',
        type: 'string'
      },
      {
        name: 'single',
        type: 'boolean'
      },
      {
        name: 'interests',
        type: 'array',
        items: {
          title: 'Interest',
          description: 'An interest',
          properties: [
            {
              name: 'name',
              type: 'string'
            }
          ],
          required: ['name']
        }
      }
    ],
    required: ['name', 'age']
  };
});