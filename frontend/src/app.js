const modules = ['ui.router']

angular
    .module("main", modules)
    .config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])
    .config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state("courses", {
                    url:'/courses',
                    templateUrl: 'courses/course.list.html',
                    controller: 'CourseController'
                })
                .state("coursedetails",{
                    url:'courses/details',
                    templateUrl: 'courses/course.crud.html',
                    controller: 'CourseCrudController',
                    params: {
                        courseList: null
                    }
                })
                .state("users",{
                    url:'/users',
                    templateUrl: 'users/user.list.html',
                    controller: 'UserController',
                })
        }
    ]);


