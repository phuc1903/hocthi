app.controller("listTestController", function($scope, $http) {
    $scope.categories = [];
    $scope.quizes = [];

    $scope.loadData = function() {
        $http.get("http://localhost:3000/categories").then(
            (res) => $scope.categories = res.data,
            (res) => alert("fail")
        )
        $http.get("http://localhost:3000/quizes").then(
            (res) => $scope.quizes = res.data,
            (res) => alert("fail")
        )
    }

    $scope.loadData();

});