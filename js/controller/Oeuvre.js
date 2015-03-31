museion.controller('oeuvreController', ['$scope', '$routeParams', 'Oeuvre', 'OeuvreService', function ($scope, $routeParams, Oeuvre, OeuvreService) {

    console.log();
    $scope.oeuvre = new Oeuvre();

    if ($routeParams.id !== null) {

        OeuvreService.get({
            id: $routeParams.id
        }, function (response) {
            $scope.oeuvre = response;
        });
    }


}]);

museion.controller('inventaireController', ['$scope', 'OeuvreService', function ($scope, OeuvreService) {

    $scope.oeuvres;

    angular.element(document).ready(function () {

        OeuvreService.liste(function (response) {
            $scope.oeuvres = response;
        });

    });

}]);
