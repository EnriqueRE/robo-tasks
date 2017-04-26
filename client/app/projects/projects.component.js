 'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projects.routes';

export class ProjectsComponent {
  /*@ngInject*/
  constructor($scope) {
    this.message = 'Hello';
    console.log('projects component');
  }

  addThing() {
    console.log('hello');
  }

}

export default angular.module('roboTasksApp.projects', [uiRouter]).config(routes).component('projects', {
  template: require('./projects.html'),
  controller: ProjectsComponent,
}).name;
