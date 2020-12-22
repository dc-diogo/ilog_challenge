angular.module("main").controller("CourseEditingController", [
  "$scope",
  "$http",
  "$state",
  "$stateParams",
  "courseList",
  "CourseService",
  function ($scope, $http, $state, $stateParams, courseList, CourseService) {
    $scope.course = null;

    $scope.returnToList = function () {
      $state.go("courses", {});
    };
    $scope.save = function () {
      const onSuccess = (resp) => {
        alert("Curso salvo com sucesso");
        $scope.returnToList();
      };
      const onError = (err) => {
        alert("Ocorreu um erro ao salvar o curso");
      };

      CourseService.alter($scope.course, onSuccess, onError);
    };

    const _convertArrayToObject = (array, key) => {
      const initialValue = {};
      return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item,
        };
      }, initialValue);
    };

    $scope.removeCourse = function () {
      const onSuccess = (data) => {
        console.log(data);
      };

      const onError = (err) => {
        console.log(err);
      };
      console.log("ID DO CURSO EH: " + $scope.course.courseId);
      CourseService.remove($scope.course.courseId, onSuccess, onError);
    };

    const init = () => {
      $scope.courseList = _convertArrayToObject(courseList, "courseName");
    };

    init();
  },
]);
