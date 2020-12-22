angular.module("main").controller("CourseCreationController", [
  "$state",
  "CourseService",
  "$scope",
  function ($state, CourseService, $scope) {
    $scope.returnToList = function () {
      $state.go("courses", {});
    };

    $scope.save = () => {
      _validateFields();

      const onSuccess = (resp) => {
        alert("Curso salvo com sucesso");
        $scope.returnToList();
      };
      const onError = (err) => {
        alert("Ocorreu um erro ao salvar o curso");
      };
      CourseService.alter(onSuccess, onError);
    };

    const _validateFields = () => {};
  },
]);
