angular.module("main").service('CourseService', ['$q', '$http', function ($q, $http) {

    var getAllCourses = function(onSuccess, onError){
        $http({
            url: 'http://localhost:8080/course/all',
            method: "GET",
        }).then(onSuccess, onError);
    }

    return {
        getAllCourses: getAllCourses

    };
}]);
