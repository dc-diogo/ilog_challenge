angular
    .module("main")
    .controller('CourseCrudController',
        ['$scope', '$http', '$state', '$stateParams',
        function ($scope, $http, $state, $stateParams) {


            $scope.course = {
                id: null,
                courseName: null,
                coursePrice: null,
                hoursDuration: null,
                courseDescription: null
            }

            $scope.save = function () {
                console.log($scope.course)
                debugger;

                const onSuccess = (resp) => {
                    $scope.courseList = resp.data;
                }
                const onError = (err) => {
                    console.log(err);
                    console.log("requisition error");
                }

                if ($scope.course.id === null){
                    //Saving new


                    $http({
                        url: 'http://localhost:8080/course/add',
                        method: "POST",
                        data: {
                            "courseName" : $scope.course.courseName,
                            "courseDescription" :  $scope.course.description,
                            "duration": $scope.course.duration,
                            "coursePrice": $scope.course.coursePrice
                        }
                    }).then(onSuccess, onError);
                } else {
                    $http({
                        url: 'http://localhost:8080/course/add',
                        method: "POST",
                        data: {
                            "courseName" : $scope.course.courseName,
                            "courseDescription" :  $scope.course.description,
                            "duration": $scope.course.duration,
                            "coursePrice": $scope.course.coursePrice
                        }
                    }).then(onSuccess, onError);
                }

            }

            const updateDropdown = (data) => {
                $scope.courseList = convertArrayToObject(data, "courseName")
            }

            const convertArrayToObject = (array, key) => {
                const initialValue = {};
                return array.reduce((obj, item) => {
                     return {
                        ...obj,
                        [item[key]]: item,
                    };
                }, initialValue);
            };

            $scope.getAllCourses = function () {
                const onSuccess = (resp) => {

                    updateDropdown(resp.data);
                }
                const onError = (err) => {
                    $scope.courseList = courseList;
                }

                $http({
                    url: 'http://localhost:8080/course/all',
                    method: "GET",
                    //data: { 'course' : $scope.course }
                }).then(onSuccess, onError);
            };



            const init = () => {
                $scope.getAllCourses();
            }

            init();
        }])
