app.controller("homeController", function($scope, $http) {
    $scope.quizes = [];

    $scope.loadData = function() {
        $http.get("http://localhost:3000/quizes").then(
            (res) => $scope.quizes = res.data,
            (res) => alert("Failed")
        )
    }

    $scope.loadData();
})