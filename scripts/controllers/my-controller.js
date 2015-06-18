define(['bower_components/angular/angular'], function(angular) {
    var dependencies = ['$scope'];
    
    var myController = function myController($scope) {
        $scope.message = 'Hello World!';
    }

    return dependencies.concat([myController]);
});