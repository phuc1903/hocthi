
var app = angular.module("myApp", ["ngRoute"])

app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "app/Views/home.html",
            controller: "homeController"
        })
        .when("/home", {
            templateUrl: "app/Views/home.html"
        })
        .when("/about", {
            templateUrl: "app/Views/about.html"
        })
        .when('/listTest', {
            templateUrl: "app/Views/listTest.html",
            controller: "listTestController"
        })
        .when('/test/:id', {
            templateUrl: "app/Views/test.html",
            controller: "testController"
        })
        .when('/done/:id', {
            templateUrl: "app/Views/done.html",
            controller: "doneController"
        })
        .when('/account/login', {
            templateUrl: "app/Views/Account/login.html",
            controller: "loginController"
        })
        .when("/manager/quizes", {
            templateUrl: "app/Views/Managers/quizes.html",
            controller: "AdminQuizController"
        })
        .when("/manager/addQuiz", {
            templateUrl: "app/Views/Managers/addQuiz.html",
            controller: "AddQuizController"
        })
        .when("/manager/quizes/:id", {
            templateUrl: "app/Views/Managers/detailQuiz.html",
            controller: "DetailQuizController"
        })
        .otherwise({
            redirectTo: "/home"
        })
})

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });

    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi, không tải được template");
    });
});
