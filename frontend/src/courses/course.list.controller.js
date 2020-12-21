angular
    .module("main")
    .controller('CourseController', ['$scope', '$http', '$state', '$stateParams', 'CourseService', 'cl',
        function ($scope, $http, $state, $stateParams, CourseService, cl) {

            let oficialCourseList = [];

            $scope.createOrEdit = function(){
                $state.go("coursedetails", {
                    "courseList" : $scope.courseList
                });
            }



            const _convertMinutesToHour = function(courseList){

                let cursoAtualizado = [];

                angular.forEach(courseList, function(curso, value){
                    const DURATION = 3;
                    curso[3] = curso[DURATION] / 60;
                    if (curso[DURATION] % 1 > 0.6) {
                        curso[DURATION] = curso[DURATION] + 1;
                        curso[DURATION] = curso[DURATION] - 0.6;
                    }
                    curso[DURATION] = curso[DURATION].toFixed(2);

                    cursoAtualizado.push(curso);
                });
                _updateCourseList(cursoAtualizado);
                return cursoAtualizado;

            }



            const _updateCourseList = (courseListUpdated) => {
                oficialCourseList = courseListUpdated;
            }

            const _createCourseArray = function(objectToArray){
                return objectToArray.map(Object.values)
            }

            const _updateTable =  (courseList) => {
                let tablecontents = "";

                for (let i = 0; i < courseList.length; i++) {
                    tablecontents += "<tr>";
                    for (let j = 0; j < courseList[i].length; j++) {
                        tablecontents += "<td>" + courseList[i][j] + "</td>";
                    }
                    tablecontents += "</tr>";
                }
                document.getElementById("courseTable").innerHTML += tablecontents;
            }

            const _init = () => {
                let courseList = _createCourseArray(cl);
                courseList = _convertMinutesToHour(courseList);
                _updateTable(courseList);
                $scope.courseList = courseList;
            }

            _init();

        }])
