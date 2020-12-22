const modules = ["ui.router"];

angular
  .module("main", modules)
  .config([
    "$qProvider",
    function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    },
  ])
  .config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider
        .state("courses", {
          url: "/courses",
          templateUrl: "courses/views/course.list.html",
          controller: "CourseController",
          resolve: {
            cl: function (CourseService) {
              return CourseService.getAllCourses().then(function (response) {
                return response.data;
              });
            },
          },
        })
        .state("newcourse", {
          url: "courses/new",
          templateUrl: "courses/views/course.create.html",
          controller: "CourseCreationController",
        })
        .state("coursedetails", {
          url: "courses/edit",
          templateUrl: "courses/views/course.edit.html",
          controller: "CourseEditingController",
          params: {
            courseList: null,
          },
          resolve: {
            courseList: function (CourseService) {
              return CourseService.getAllCourses().then(function (response) {
                return response.data;
              });
            },
          },
        })
        .state("users", {
          url: "/users",
          templateUrl: "users/user.list.html",
          controller: "UserController",
        });
    },
  ]);
