app.controller("appController", function($scope, $rootScope){
    if(localStorage.getItem('user')) {
        $rootScope.user = JSON.parse(localStorage.getItem("user"));
    }

    $scope.logout = function() {
        localStorage.removeItem('user')
        delete $rootScope.user;
    }
})