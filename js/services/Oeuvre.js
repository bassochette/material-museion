museion.factory('OeuvreService', ['$resource', function ($resource) {

    return $resource('http://moire.museion.dev:3000/oeuvre/:id', {id: '@id'}, {
        'get' : {
            method: 'GET',
            url: "http://moire.museion.dev:3000/oeuvre/detail/:id"
        },
        'update' : {
            method: 'PUT'
        },
        'liste': {
            method: 'GET',
            isArray: true,
            url : 'http://moire.museion.dev:3000/oeuvre/liste/50/1'
        }
    });

}]);

museion.factory('Oeuvre', function () {
    return function () {
        return {

            id: null,

            oeuvreId: null,

            modeAcquisition: null,

            nomDonnateur: null,

            dateAcquisition: null,

            avisScientifique: null,

            prix: null,

            dateInscriptionInventaire: null,

            designation: null,

            marquesInscription: null,

            materiaux: null,

            techniques: null,

            mesures: null,

            indicationEtat: null,

            auteur: null,

            datation: null,

            fonction: null,

            provenance: null,

            observations: null,

            verrou: false


        };
    }
});