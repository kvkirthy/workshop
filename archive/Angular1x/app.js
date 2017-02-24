angular.module("sampleApp", ["ui.router"])
    .controller("dinosaurListController", ["$scope", "dataAccess", function ($scope, da) {
        da.getDinosaurs()
            .then(function(response){
                $scope.dinosaurs = response;
            });
    }])
    .controller("dinosaurDetailsController", function($scope, dataAccess, $stateParams){
    //    console.log($stateParams.name);
        dataAccess.getDinosaurDetails($stateParams.name)
            .then(function(response){
                $scope.dinosaur = response;
            })

    })
    .service('dataAccess', function ($http, $q) {

        this.getDinosaurs = function () {
            var deferred = $q.defer();

            $http.get('http://localhost:3001/dinosaurs')
                .then(function (response) {
                    deferred.resolve(response.data);
                },
                function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        this.getDinosaurDetails = function (name) {
            var deferred = $q.defer();

            $http.get('http://localhost:3001/dinosaurs?name=' + name)
                .then(function (response) {
                    console.log(response);
                    deferred.resolve(response.data);
                },
                function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    })
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state({
                name:"home",
                url: "/home",
                templateUrl: "./list.html",
                controller: "dinosaurListController"
            })
            .state({
                name:'dinosaurDetails',
                url: "/details/:name",
                templateUrl: "./details.html",
                controller: "dinosaurDetailsController"
            })

            $urlRouterProvider.otherwise("/home");
    //     $defaultRoutingProvider.otherwise({redirectTo: '/home'});
    })
    ;