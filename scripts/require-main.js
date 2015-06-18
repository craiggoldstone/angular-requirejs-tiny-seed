requirejs({
    paths: {
        'bower_components': '../bower_components'
    },
    shim: {
        'bower_components/angular/angular': {
            exports: 'angular'
        }
    }
});
requirejs(['bower_components/angular/angular', 'app'], function(angular, app) {
    // bootstrap app after onReady event
    angular.element().ready(function () {
        angular.bootstrap(angular.element(document.body), [app.name], {
            strictDi: true // production mode
        });
        console.log('bootstrapped app ' + app.name + ' with requirejs');
    });
});