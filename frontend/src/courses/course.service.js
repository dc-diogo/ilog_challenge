angular.module("main").service('CourseService', ['$q', '$http', function ($q, $http) {

    const getAllCourses = function(onSuccess, onError){
        return $http({
            url: 'http://localhost:8080/course/all',
            method: "GET",
        })
    }




    return {
        getAllCourses: getAllCourses

    };
}]);
