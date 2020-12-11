angular
    .module("main")
    .controller('CourseController', ['$scope', '$http', '$state', '$stateParams',
        function ($scope, $http, $state, $stateParams) {



            $scope.createOrEdit = function(){
                $state.go("coursedetails", {
                    "courseList" : $scope.courseList
                });
            }


            $scope.getAllCourses = function () {
                const onSuccess = (resp) => {
                    $scope.courseList = resp.data;
                    $scope.updateTable();
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

            $scope.updateTable = function () {
                let employee = $scope.courseList.map(Object.values)
                let tablecontents = "";

                for (let i = 0; i < employee.length; i++) {
                    tablecontents += "<tr>";
                    for (let j = 0; j < employee[i].length; j++) {
                        tablecontents += "<td>" + employee[i][j] + "</td>";
                    }
                    tablecontents += "</tr>";
                }
                document.getElementById("courseTable").innerHTML += tablecontents;
            }

            const init = () => {
                $scope.getAllCourses();
            }

            init();
        }])
