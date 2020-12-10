angular
    .module("main")
    .controller('UserController', ['$scope', '$http',
        function ($scope, $http) {

    $scope.userName = "Diogo Viana";
    $scope.userAdmissionDate;
    $scope.userPhone;
    $scope.userAddress;

    $scope.saveUser = function(){
        $http.get('https://api.github.com/users/' + $scope.kullaniciadi + '/repos')
            .then(function(resp){
                console.log("sucess" + resp.data);
            }, function(err){
                console.log(err)
            });

    };

    $scope.editUser = function(){
        //Todo Edit User
        //Call Save
    }

    $scope.deleteUser = function(userId){
        //Todo: Remove user by ID
    }

    $scope.joinCourse = function(userId, courseId){

    }

    $scope.getGithubRepos = function () {
        $http.get('https://api.github.com/users/' + $scope.kullaniciadi + '/repos')
            .then(function(data){
                console.log("chegou aqui" + data)
            }, function(err){
                console.log("erro" + err)
            });

    };

            $scope.getGithubRepos2 = function () {
                $http.get('http://localhost:8080/course/all')
                    .then(function(data){
                        console.log("chegou aqui" + data.data)
                    }, function(err){
                        console.log("erro" + err)
                    });

            };

}])
