console.log('loaded frontend app');

var frontend_app = angular.module("mean_app", []);
frontend_app.controller('crud_controller', do_crud);

function do_crud($scope, $http) {
    console.log('inside do_crud');

    $scope.read = function () {
        console.log('reading all data');
        $http.get('/api/read')
            .then(function (results) {
                console.log(results.data);
                $scope.users = results.data;
            });
    }

    $scope.read();

    $scope.create = function () {
        console.log('creating data');
        console.log($scope.input_user);

        var data = {
            user: $scope.input_user
        }

        $http.post('/api/create', data)
            .then(function (result) {
                console.log(result);
                $scope.read();

            });
    }

    $scope.update = function (user) {
        console.log('updating data');
        console.log(user);
        $http.put('/api/update', user)
            .then(function (result) {
                console.log(result);
                $scope.read();
            });
    }

    $scope.delete = function (user) {
        console.log('deleting data');
        console.log(user);
        $http.delete('/api/delete/' + user._id)
            .then(function (result) {
                console.log(result);
                $scope.read();
            });

    }
}