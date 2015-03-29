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

        $scope.oeuvre = {

            id: '1',

            oeuvreId: "M07-001-0001",

            modeAcquisition: "",

            nomDonnateur: "",

            dateAcquisition: "",

            avisScientifique: "",

            prix: "",

            dateInscriptionInventaire: "",

            designation: "La Grande Vague de Kanagawa",

            marquesInscription: "",

            materiaux: "bois",

            techniques: "gravure sur bois nishiki-e",

            mesures: "25,7 × 37,91 cm",

            indicationEtat: "indic",

            auteur: "Katsushika Hokusai",

            datation:  "1830 - 1831",

            fonction: "",

            provenance: "Japon",

            observations: "La Grande Vague de Kanagawa (神奈川沖浪裏中, Kanagawa-oki nami-ura?, littéralement Sous la vague au large de Kanagawa), plus connue sous le nom de La Vague2, est une célèbre estampe japonaise du peintre japonais spécialiste de l'ukiyo-e, Hokusai, publiée en 18303 ou en 1831Note 1 pendant l'époque d'Edo."+
           "Cette estampe est l'œuvre la plus connue de Hokusai et la première de sa fameuse série « Trente-six vues du mont Fuji »Note 2, dans laquelle l'utilisation du bleu de Prusse renouvelait le langage de l'estampe japonaise. La composition de La Vague, synthèse de l'estampe japonaise traditionnelle et de la « perspective » occidentale, lui valut un succès immédiat au Japon, puis en Europe, où elle fut une des sources d'inspiration des Impressionnistes." +
        "Plusieurs musées en conservent des exemplaires, tels que le musée Guimet, le Metropolitan Museum of Art, le British Museum, ou encore la Bibliothèque nationale de France ; ils proviennent généralement des grandes collections privées d'estampes japonaises constituées au XIXe siècle.",

            verrou: false,

            image : "http://cdn1-new-europe1.ladmedia.fr/var/europe1/storage/images/media/photos/divertissement/culture/hokusai-1280x640/34555591-1-fre-FR/Hokusai-1280X640.jpg"

        }


    }]);

    app.controller('inventaireController', ['$scope', function($scope){

        $scope.list = [
            {
                oeuvreId : "M001-001-001",
                designation : "Joconde",
                auteur : 'Léo de vinci',
                image : "http://www.arretsurimages.net/media/breve/s183/id18273/original.76647.demi.jpg"
            },
            {
                oeuvreId : "M001-001-002",
                designation : "David",
                auteur : "Michou Ange",
                image : "https://s-media-cache-ak0.pinimg.com/236x/04/d6/d8/04d6d8862f350e1bfc314d29246cd8b6.jpg"
            },
            {
                oeuvreId : "M001-001-003",
                designation : "Sacre de Napoléon",
                auteur : "J-Lou David",
                image : "http://pythacli.chez-alice.fr/recent32/versailles_sacre_napoleon.jpg"
            },
            {
                oeuvreId : "M001-012-001",
                designation : "Manuscrit Dom Juan",
                auteur : "Moliche",
                image : "http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Don_Juan_(Moli%C3%A8re).jpg/280px-Don_Juan_(Moli%C3%A8re).jpg"
            }
        ];

    }]);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvier){

        $routeProvider
            .when('/', {
                templateUrl: 'partials/oeuvre.html',
                controller: 'oeuvreController'
            })
            .when('/inventaire',{
                templateUrl: 'partials/inventaire.html',
                controller: 'inventaireController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

})();