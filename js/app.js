(function () {

    var app = angular.module('museion', [
        'ngMaterial',
        'ngRoute'
    ]);

    app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

        $scope.toggleSidenav = function(menuId){
          $mdSidenav(menuId).toggle();
        };

    }]);

    app.config(function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('green', {
                'default' : '600',
                'hue-1' : '300',
                'hue-2' : '400',
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

    app.controller('oeuvreController', ['$scope', function($scope){

    }]);

    app.controller('inventaire', ['$scope', function($scope){

    }]);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvier){

        $routeProvider
            .when('/', {
                templateUrl: 'partials/oeuvre.html',
                controller: 'oeuvreController'
            })
            .when('/inventaire',{
                templateUrl: 'partials/inventaire.html',
                controller: 'iventaireController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

})();