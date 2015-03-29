(function () {

    var app = angular.module('museion', [
        'ngMaterial'
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

})();