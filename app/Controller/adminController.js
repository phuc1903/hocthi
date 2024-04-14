app.controller("AdminQuizController", function($scope, $http, $rootScope) {

    $scope.quizes = [];

    $scope.loadData = function() {
        $http.get("http://localhost:3000/quizes").then(
            function(res) {
                $scope.quizes = res.data;
                $rootScope.quizes = $scope.quizes;
                console.log();
            },
            function(res) {
                alert("connect quizes failed");
            }
        )
    }

    $scope.loadData();

    $scope.deleteQuiz = function(id, index) {
        $http.delete("http://localhost:3000/quizes/" + id)
            .then(function(res) {
                $scope.quizes.splice(index, 1);
            })
            .catch(function(err) {
                console.error("Lỗi khi xóa quiz: ", err);
                alert("Xóa quiz thất bại!");
            });
    };
    
})

app.controller("AddQuizController", function($scope, $http, $rootScope, $location) {
    
    var randomId = Math.floor(Math.random() * 1000000).toString();

    $scope.AddQuiz = function() {

        $scope.quiz = {
            id: randomId,
            title: $scope.title,
            created_at: $rootScope.currentDate,
            location: $scope.location,
            user_join: 0,
            time: 60,
            ques_quantity: $scope.ques_quantity,
        }


        $scope.quizJson = angular.toJson($scope.quiz);

        console.log($scope.quizJson)

        $http.post("http://localhost:3000/quizes", $scope.quizJson).then(
            function(res){
                $rootScope.quizes.push($scope.quizJson);
                $location.path("/manager/quizes");
                // console.log($rootScope.quizes);
            }
        ) 
    }
})

app.controller("DetailQuizController", function($scope, $routeParams, $http) {
    $scope.quiz = [];
    $scope.idQuiz = $routeParams.id;

    $scope.loadData = function() {
        $http.get("http://localhost:3000/questions?quiz_id="+$scope.idQuiz).then(
            function(res) {
                $scope.quiz = res.data;
                // console.log(res.data)
            },
            function(res) {
                alert("connect quizes failed");
            }
        )
    }

    $scope.loadData();
})