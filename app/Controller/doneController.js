app.controller("doneController", function($scope, $http, $rootScope){
    $scope.selectedAnswers = $rootScope.selectedAnswers;
    $rootScope.selectedAnswers = [];

    // Khởi tạo biến đếm số câu trả lời đúng
    $scope.correctAnswersCount = 0;

    $scope.questions = [];

    $http.get("http://localhost:3000/questions?quiz_id=" + $scope.id).then(
            function(res) {
                $scope.questions = res.data
            },
            function(res) {
                alert("Connect question by id fail")
            }
    );

    // Lặp qua từng câu hỏi
    angular.forEach($scope.questions, function(question) {

        angular.forEach(question.answers, function(answer) {

            if (answer.selected && question.correct.includes(answer.id)) {
                $scope.correctAnswersCount++;
            }
        });
    })
});
