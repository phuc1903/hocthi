app.controller("listTestController", function ($scope, $http) {
    $scope.categories = [];
    $scope.quizes = [];
    $scope.filteredQuizes = [];

    $scope.loadData = function () {
        $http.get("http://localhost:3000/categories").then(
            (res) => ($scope.categories = res.data),
            (res) => alert("fail")
        );
        $http.get("http://localhost:3000/quizes").then(
            (res) => {
                $scope.quizes = res.data;
                $scope.filteredQuizes = res.data;
            },
            (res) => alert("fail")
        );
    };

    $scope.loadData();

    $scope.filterByCategory = function (categoryId) {
        // console.log(categoryId);
        $scope.filteredQuizes = $scope.quizes.filter(function (quiz) {
            return quiz.category_id == categoryId;
        });
        // console.log($scope.filteredQuizes);

    };


    $scope.filterByRank = function (rank) {
        if (rank === "normal" || rank === "medium" || rank === "critical") {
            $scope.filteredQuizes = $scope.quizes.filter(function (quiz) {
                return quiz.rank === rank;
            });
        } else {
            $scope.filteredQuizes = $scope.quizes;
        }
    };

    $scope.search = function () {
        if ($scope.searchTitle) {
            $scope.filteredQuizes = $scope.quizes.filter(function (quiz) {
                return quiz.title.toLowerCase().includes($scope.searchTitle.toLowerCase());
            });
        } else {
            $scope.filteredQuizes = $scope.quizes;
        }
    };
});