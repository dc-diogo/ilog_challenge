angular.module("main").controller("CourseController", [
  "$scope",
  "$http",
  "$state",
  "$stateParams",
  "CourseService",
  "cl",
  function ($scope, $http, $state, $stateParams, CourseService, cl) {
    let oficialCourseList = [];

    $scope.createOrEdit = function () {
      $state.go("coursedetails", {
        courseList: $scope.courseList,
      });
    };

    const _parseDurationFromSecondsToHours = function (courseList) {
      let cursoAtualizado = [];
      const DURATION = 3;
      angular.forEach(courseList, function (curso, value) {
        curso[DURATION] = new Date(curso[DURATION] * 1000)
          .toISOString()
          .substr(11, 8);
        cursoAtualizado.push(curso);
      });
      return cursoAtualizado;
    };

    const _parseCurrency = function (courseList) {
      let cursoAtualizado = [];
      const PRICE = 4;
      angular.forEach(courseList, function (curso, value) {
        curso[PRICE] = curso[PRICE].toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        cursoAtualizado.push(curso);
      });
      return cursoAtualizado;
    };

    const _createCourseArray = function (objectToArray) {
      return objectToArray.map(Object.values);
    };

    const _updateTable = (courseList) => {
      let tablecontents = "";

      for (let i = 0; i < courseList.length; i++) {
        tablecontents += "<tr>";
        for (let j = 0; j < courseList[i].length; j++) {
          tablecontents += "<td>" + courseList[i][j] + "</td>";
        }
        tablecontents += "</tr>";
      }
      document.getElementById("courseTable").innerHTML += tablecontents;
    };

    const _init = () => {
      let courseList = _createCourseArray(cl);
      courseList = _parseDurationFromSecondsToHours(courseList);
      courseList = _parseCurrency(courseList);
      _updateTable(courseList);
      $scope.courseList = courseList;
    };

    _init();
  },
]);
