define(['bower_components/angular/angular', 'controllers/my-controller'], function(angular, myController) {
    var app = angular.module('tiny-app', []);
    app.controller('my-ctrl', myController);
    return app;
});