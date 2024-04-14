app.controller("loginController", function($scope, $http, $location, $rootScope) {
    $scope.login = function() {
        $scope.isError = false;
        $http.get(`http://localhost:3000/users?email=${$scope.email}&password=${$scope.password}`).then(
            function(res) {

                if(res.data.length==0) { // login fail
                    $scope.isError = true;
                }
                else { // login success
                    $rootScope.user = res.data[0];
    
                    localStorage.setItem('user', JSON.stringify($rootScope.user));

                    $location.path("/");
                }    
            },
            function(res) {
                $scope.isError = true;
            }
        )

        // $http.post('/login', data)
        // .then(function(response) {
        //     // localStorage.setItem('user', JSON.stringify(response.data.user));
            
        //     $location.path('/home');
        // })
        // .catch(function(error) {
        //     console.error('Login failed:', error);
        // });
    };
});
