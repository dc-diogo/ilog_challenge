angular.module("main")
    .controller('CourseController', ['$scope', '$http', function ($scope, $http) {

        $scope.courseName;
        $scope.courseDescription;
        $scope.courseDuration;
        $scope.price;

        $scope.save = function(){
            console.log("Salvando:... " + $scope.courseName, $scope.courseDescription, $scope.courseDuration,$scope.price);
        }


        $scope.courseList = [
            {
                'id': 1,
                'courseName': 'Portugues'
            }
        ];

        var onSuccess = function (resp) {
            console.log(resp.data)
            $scope.courseList = resp.data;
        }

        var onError = function (err) {
            console.log("Error")
        }

        $scope.getAllCourses = function () {
            $http.get('localhost:8080/course/all')
                .then(onSuccess, onError);
        };


}])
