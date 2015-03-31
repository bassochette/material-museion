var museion = angular.module('museion', [
    'ngMaterial',
    'ngRoute',
    'ngResource'
]);

museion.config(['$resourceProvider', function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

museion.controller('AppController', ['$scope', '$mdSidenav', 'Oeuvre' ,function($scope, $mdSidenav, Oeuvre){

    $scope.toggleSidenav = function(menuId){
        $mdSidenav(menuId).toggle();
    };

}]);

museion.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('green', {
            'default' : 'A200',
            'hue-1' : '300',
            'hue-2' : '900',
            'hue-3' : 'A400'
        })
        .accentPalette('cyan', {
            'default' : '500',
            'hue-1' : '300',
            'hue-2' : '600',
            'hue-3' : '100'
        })
        .warnPalette('amber', {
            'default' : '500',
            'hue-1' : '300',
            'hue-2' : '700',
            'hue-3' : 'A200'
        });
});


museion.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvier){

    //$locationProvier.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/oeuvre', {
            templateUrl : 'partials/oeuvre.html',
            controller : 'oeuvreController'
        })
        .when('/oeuvre/:id', {
            templateUrl: 'partials/oeuvre.html',
            controller : 'oeuvreController'
        })
        .when('/inventaire',{
            templateUrl: 'partials/inventaire.html',
            controller: 'inventaireController'
        });
}]);
