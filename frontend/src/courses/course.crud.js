angular
    .module("main")
    .controller('CourseCrudController',
        ['$scope', '$http', '$state', '$stateParams',
        function ($scope, $http, $state, $stateParams) {

            debugger;
            console.log($stateParams)

            $scope.course = {
                courseName: null,
                coursePrice: null,
                hoursDuration: null,
                courseDescription: null
            }


            $scope.saveOrEdit = function () {

                if ($scope.course.id === null){
                    //Saving new
                    const onSuccess = (resp) => {
                        $scope.courseList = resp.data;
                    }
                    const onError = (err) => {
                        console.log("requisition error");
                    }

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
                    //Saving new
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
                    debugger;
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
