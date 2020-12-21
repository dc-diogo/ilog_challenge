angular
    .module("main")
    .controller('CourseController', ['$scope', '$http', '$state', '$stateParams', 'CourseService',
        function ($scope, $http, $state, $stateParams, CourseService) {

            $scope.createOrEdit = function(){
                $state.go("coursedetails", {
                    "courseList" : $scope.courseList
                });
            }

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

            const _getCourses = () => {
                const onSuccess = (resp) => {
                    $scope.courseList = resp.data;
                    $scope.updateTable();
                }
                const onError = (err) => {
                    console.log(err);
                }
                CourseService.getAllCourses(onSuccess, onError);
            }

            const _init = () => {
                _getCourses();
            }

            _init();

        }])
