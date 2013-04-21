function RegisterCtrl($scope, $http, $location, User, Session, $cookieStore) {

    $scope.register = function(user) {
        // Post it to server
        Session.user = User.save(user, function() {
            console.log(Session.user);
            $cookieStore.put('user', Session.user);
            $location.path('/details');
        });
    }
}

function LoginCtrl($scope, $http, $location, User, Session, $cookieStore) {
    console.log("Login controller loaded");

    $scope.credentials = {};

    $scope.loginWithCredentials = function(credentials) {

        Session.user = User.login(credentials, function() {

            $cookieStore.put('user', Session.user);

            if(Session.user.height) {
                $location.path('/home');
            } else {
                $location.path('/details');
            }

        });
    }
}

function DetailsCtrl($scope, Session, $location) {

    console.log("Session is ", Session.user);

    $scope.user = Session.user;

    $scope.saveDetails = function(user) {
        user.$save(function() {
            $location.path('/home');
        });
    }
}

function HomeCtrl($scope, $cookieStore, Weight) {
    $scope.user = $cookieStore.get('user');
    $scope.addWeight = function(newWeight) {
        var weight = Weight.save({
            kilograms: newWeight,
            userId: $scope.user.id
        }, function(data) {
            console.log("weight added", data);
            if(!angular.isDefined($scope.user.ownWeight)) {
                $scope.user.ownWeight = [];
            }
            $scope.user.ownWeight.push(weight);
        });
    }
}