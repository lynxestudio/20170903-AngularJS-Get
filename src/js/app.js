
(function () {
    var app = angular.module('getExample', []);
    app.controller('booksCtrl', function ($scope, $http)
    {
        var url = "/books.json";
        $scope.showBooks = function () {
            $http.get(url, { responseType: "json" }).success(function (response) {
                $scope.books = response;
            }).error(function (data, status, headers, config) {
                alert("There was a error.");
            });
        }
    });
})();