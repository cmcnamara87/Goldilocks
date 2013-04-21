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

function LoginCtrl($scope, $http, $location, Api, User, Session, $cookieStore) {
    console.log("Login controller loaded");

    console.log("base url", Api.baseUrl);

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

function HomeCtrl($scope, $cookieStore, Weight, Day, Meal) {
    $scope.user = $cookieStore.get('user');

    // Load today
    $scope.today = Day.today({
        'userId': $scope.user.id},
        function() {
            console.log("successfully got the day");

            // Meal is an array of food
            $scope.newMeal = {
                'ownFood'   : [],
                'dayId'     : $scope.today.id
            };
            console.log("New Meal", $scope.newMeal);

        }
    );




    $scope.saveNewMeal = function(newMeal) {
        var savedNewMeal = Meal.save(newMeal, function() {
            console.log("meal saved", savedNewMeal);
        });
        $scope.newMeal.ownFood = [];
        $scope.today.ownMeal.unshift(savedNewMeal);
    }

    $scope.addFood = function(food) {
        $scope.newMeal.ownFood.push(angular.copy(food));
        $scope.food = {};
    }


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