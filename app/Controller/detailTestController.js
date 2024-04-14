app.controller("testController", function($scope, $routeParams, $http, $rootScope, $location) {
    $scope.questions = [];
    $scope.quiz = {};

    $scope.id = $routeParams.id;

    $scope.isCheckbox = true;

    $scope.loadData = function() {

        $http.get("http://localhost:3000/quizes?id=" + $scope.id).then(
            function (res) {
                $scope.quiz = res.data;
            } ,
            function (res) {
                alert("Connect quizes fail")
            } 
        );
        $http.get("http://localhost:3000/questions?quiz_id=" + $scope.id).then(
            function(res) {
                $scope.questions = res.data
            },
            function(res) {
                alert("Connect question by id fail")
            }
        );
    }

    $scope.loadData();

    $scope.selectedAnswers = [];

    $scope.choseAnswers = function(answerId) {
        var answer = $scope.questions.flatMap(question => question.answers).find(answer => answer.id === answerId);
        if (answer) {
          if (answer.selected) {
            if (!$scope.selectedAnswers.includes(answerId)) {
              $scope.selectedAnswers.push(answer);
            //   console.log($scope.selectedAnswers);
            }
          } else {
            $scope.selectedAnswers = $scope.selectedAnswers.filter(item => item.id !== answerId);
        }
        }
    };
      


    $scope.submitQuiz = function() {
        $rootScope.selectedAnswers = $scope.selectedAnswers;
        $scope.selectedAnswers = [];
        $location.path('/done/'+$scope.id);
        // console.log($rootScope.selectedAnswers);
    };
    
});