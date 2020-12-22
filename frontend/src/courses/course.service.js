angular.module("main").service("CourseService", [
  "$q",
  "$http",
  function ($q, $http) {
    const getAllCourses = () => {
      return $http({
        url: "http://localhost:8080/course/all",
        method: "GET",
      });
    };

    const save = (course, onSuccess, onError) => {
      $http({
        url: "http://localhost:8080/course/save",
        method: "POST",
        data: {
          courseName: course.courseName,
          courseDescription: course.description,
          duration: course.duration,
          coursePrice: course.coursePrice,
        },
      }).then(onSuccess, onError);
    };

    const alter = (courseId, course, onSuccess, onError) => {
      $http({
        url: "http://localhost:8080/course/edit",
        method: "PUT",
        data: {
          courseName: course.courseName,
          courseDescription: course.description,
          duration: course.duration,
          coursePrice: course.coursePrice,
        },
      }).then(onSuccess, onError);
    };

    const remove = (courseId, onSuccess, onError) => {
      debugger;
      $http({
        url: "http://localhost:8080/course/remove",
        method: "DELETE",
        params: { identifier: courseId },
      }).then(onSuccess, onError);
    };

    return {
      getAllCourses: getAllCourses,
      save: save,
      remove: remove,
      alter: alter,
    };
  },
]);
