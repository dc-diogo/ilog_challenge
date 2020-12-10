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
                    controller: 'CourseController',
                })
                .state("users", {
                    url:'/users',
                    templateUrl: 'users/user.list.html',
                    controller: 'UserController',
                })
                // .state("viewB", {
                //     url:'/viewB',
                //     templateUrl: 'view.html',
                //     controller: 'ctrlB',
                // });
        }
    ]);


