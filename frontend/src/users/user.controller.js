angular.module("main").controller('UserController', ['$scope', '$http', function ($scope, $http) {

    $scope.diogo = "Diogo Viana";
    $scope.getGithubRepos = function () {



        $http.get('https://api.github.com/users/' + $scope.kullaniciadi + '/repos')
            .then(onSuccess, onError);


    };

}])
