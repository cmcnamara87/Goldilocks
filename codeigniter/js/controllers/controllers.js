

function RegisterController($scope) {
    $scope.user = {};
}

function LoginController($scope) {

    // Stores the current user
    $scope.user = {};
    // Setup some defaults for height and weight (for me that is :P)
    $scope.user.height = 183;
    $scope.user.age = 25;

    // Stores the current weight of hte user
    $scope.weight = {
        'kilograms': '102'
    };

    // Stores a new meal being added
    $scope.newMeal = {
        'foods': [],
        'day': 1
    };
    // Stores new food entries being added to the current meal
    $scope.newFood = {};

    $scope.today = {
        'meals': []
    };
    $scope.pastDays = [];

    $scope.addFoodToNewMeal = function(newFood) {
        // Adds food to a mean
        $scope.newMeal.foods.push(newFood);
    }

    // 473g
    // 232 calories
    // 970
    // 420 / 473 * 970
    $scope.entries = [
        {
            'description': 'KFC Chips Large',
            'kilojoules': 2168
        },
        {
            'description': 'KFC Hot n Spicy Fillet',
            'kilojoules': 95
        },
        {
            'description': 'KFC Fillet Burger',
            'kilojoules': 1855
        },
        {
            'description': 'KFC Potato and Gravy Regular',
            'kilojoules': 329
        },
        {
            'description': 'bacon raw 70g',
            'kilojoules': 427
        },
        {
            'description': 'egg',
            'kilojoules': 613
        },
        {
            'description': 'bubble tea',
            'kilojoules': 861
        }
    ];



    // 191Calories/100g - sunrice calories
    // 200g of rice = = 1598 KJ


//    142g - 220 Calories http://caloriecount.about.com/calories-jyoti-chicken-saag-i207791
//
//        530 Calories = 2217 kilojoules
//
//    roti - 1161KJ

    $scope.entries = [
        {
            'description': 'Basmati Rice 200G',
            'kilojoules': 1598
        },
        {
            'description': 'A Night in India Chicken Saag Takeaway 345G',
            'kilojoules': 1841
        },
        {
            'description': 'A Night in India Roti 118G',
            'kilojoules': 1161
        },
        {
            'description': 'Subway Turkey and Ham 6"',
            'kilojoules': 1100
        },
        {
            'description': 'Subway Turkey and Ham 6"',
            'kilojoules': 1100
        },
        {
            'description': 'Subway Cheddar Cheese 6"',
            'kilojoules': 162
        },
        {
            'description': 'Subway Cheddar Cheese 6"',
            'kilojoules': 162
        },

        {
            'description': 'Subway Honey Mustard Sauce 6"',
            'kilojoules': 125
        },
        {
            'description': 'Subway Honey Mustard Sauce 6"',
            'kilojoules': 125
        },
        {
            'description': 'Subway Honey Oat Bread 6"',
            'kilojoules': 147
        },
        {
            'description': 'Subway Honey Oat Bread 6"',
            'kilojoules': 147
        },
        {
            'description': 'Cappuccino w. skim milk, no added sugar',
            'kilojoules': 402
        }
    ];


    $scope.entries = [
        {
            'description': 'KFC QLD Large Chips',
            'kilojoules': 2168
        },
        {
            'description': 'KFC QLD Original Bacon & Cheese Burger',
            'kilojoules': 2189
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Lipton Ice Tea Peach Lite',
            'kilojoules': 15
        },
        {
            'description': 'Toblerone Triange 1 Piece',
            'kilojoules': 292
        }
    ];

    $scope.entries = [
        {
            'description': 'Twix',
            'kilojoules': 761
        },
        {
            'description': 'Twix',
            'kilojoules': 761
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Hungry Jacks Grilled Chicken Classic',
            'kilojoules': 1562
        },
        {
            'description': 'Hungry Jacks Grilled Chicken Classic',
            'kilojoules': 1562
        }
    ];

    $scope.entries = [
        {
            'description': 'Toblerone Triange 1 Piece',
            'kilojoules': 292
        },
        {
            'description': 'Cappuccino w. skim milk, no added sugar',
            'kilojoules': 402
        },
        {
            'description': 'Cappuccino w. skim milk, no added sugar',
            'kilojoules': 402
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Red Rooster, Flayva with Chilli and Garlic Aoili',
            'kilojoules': 2750
        },
        {
            'description': 'Red Rooster, Chips, Large',
            'kilojoules': 2140
        }
    ];

    $scope.entries = [
        {
            'description': 'Salsas, Chicken & Gucamole',
            'kilojoules': 1920
        },
        {
            'description': 'Salsas, Large Chips',
            'kilojoules': 2490
        },
        {
            'description': 'Event Cinema, Churro',
            'kilojoules': 628
        },
        {
            'description': 'Hungry Jacks TenderGrill Classic',
            'kilojoules': 1316
        },
        {
            'description': 'Hungry Jacks Large Onion Rings',
            'kilojoules': 1648
        }
    ];

    $scope.entries = [
        {
            'description': 'Bacon Raw 100g',
            'kilojoules': 609
        },
        {
            'description': 'Large Egg 60g',
            'kilojoules': 613
        },
        {
            'description': 'Thai Treasure Chicken Cashnew Nut Stirfry',
            'kilojoules': 2648
        },
        {
            'description': 'Mcdonald\'s Grand Crispy Chicken Burger',
            'kilojoules': 2650
        },
        {
            'description': 'McDonald\'s Soft Serve',
            'kilojoules': 627
        }
    ];

    $scope.entries = [
        {
            'description': 'Cappuccino w. skim milk, no added sugar',
            'kilojoules': 402
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'KFC Chips Large',
            'kilojoules': 2168
        },
        {
            'description': 'KFC Sweet Chilli Twister',
            'kilojoules': 1970
        },
        {
            'description': 'KFC Crispy Strips',
            'kilojoules': 1102
        }
    ];

    $scope.entries = [
        {
            'description': 'Cappuccino w. skim milk, no added sugar',
            'kilojoules': 402
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'KFC Chips Large',
            'kilojoules': 2168
        },
        {
            'description': 'KFC Sweet Chilli Twister',
            'kilojoules': 1970
        },
        {
            'description': 'KFC Crispy Strips',
            'kilojoules': 1102
        }
    ];

    $scope.entries = [
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Red Rooster, Chips, Large',
            'kilojoules': 2140
        },
        {
            'description': 'Red Rooster Crispy Strip',
            'kilojoules': 540
        },
        {
            'description': 'Red Rooster Crispy Strip',
            'kilojoules': 540
        },
        {
            'description': 'Red Rooster Fillet Burger',
            'kilojoules': 2080
        }
    ];

    $scope.entries = [
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'KFC Chips Large',
            'kilojoules': 2168
        },
        {
            'description': 'KFC Sweet Chilli Twister',
            'kilojoules': 1970
        },
        {
            'description': 'KFC Crispy Strips',
            'kilojoules': 1102
        }
    ];

    $scope.entries = [
        {
            'description': 'Cappuccino w. skim milk, no added sugar',
            'kilojoules': 402
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'Sushi Roll, Teriyaki Chicken',
            'kilojoules': 682
        },
        {
            'description': 'KFC Chips Large',
            'kilojoules': 2168
        },
        {
            'description': 'KFC Sweet Chilli Twister',
            'kilojoules': 1970
        },
        {
            'description': 'KFC Crispy Strips',
            'kilojoules': 1102
        }
    ];

    $scope.entries = [
        {
            'description': 'Dominos Cheesy Crust Hawaiian',
            'kilojoules': 1100
        },
        {
            'description': 'Dominos Cheesy Crust Hawaiian',
            'kilojoules': 1100
        },
        {
            'description': 'Dominos Cheesy Crust Hawaiian',
            'kilojoules': 1100
        },
        {
            'description': 'Dominos Cheesy Crust Hawaiian',
            'kilojoules': 1100
        },
        {
            'description': 'Hungry Jacks TenderGrill Classic',
            'kilojoules': 1316
        },
        {
            'description': 'Hungry Jacks Large Onion Rings',
            'kilojoules': 1648
        }
    ];



    $scope.goldilocksPercentages = function() {
        var total = $scope.dailyCaloricNeedsMin(1.2) * 2 + ($scope.dailyCaloricNeedsMax(1.2) - $scope.dailyCaloricNeedsMin(1.2));
        return {
            'current': $scope.energyIn() / total * 100,
            'total': total,
            'tooLittle': $scope.dailyCaloricNeedsMin(1.2) / total * 100,
            'justRight':  ($scope.dailyCaloricNeedsMax(1.2) - $scope.dailyCaloricNeedsMin(1.2)) / total * 100,
            'tooMuch': $scope.dailyCaloricNeedsMin(1.2) / total * 100
        }
    }

    $scope.bmr = function() {
        return 4.18400 * (10 * $scope.weight.kilograms + 6.25 * $scope.user.height - 5 * $scope.user.age + 5)
    }

    $scope.dailyCaloricNeedsMin = function(activityLevel) {
        return $scope.bmr() * activityLevel * 0.6;
    }
    $scope.dailyCaloricNeedsMax = function(activityLevel) {
        return $scope.bmr() * activityLevel * 0.8;
    }

    console.log($scope.bmr());
/*
    Mifflin - St Jeor Formula

    Sedentary = BMR X 1.2 (little or no exercise, desk job)
    Lightly active = BMR X 1.375 (light exercise/sports 1-3 days/wk)
    Mod. active = BMR X 1.55 (moderate exercise/sports 3-5 days/wk)
    Very active = BMR X 1.725 (hard exercise/sports 6-7 days/wk)
    Extr. Active = BMR X 1.9 (hard daily exercise/sports & physical job or 2X day training, i.e marathon, contest etc.)
*/

/*
    Sun     1.0
    Mon     0.8
    Tue     1.2
    Wed     1.0
    Thu     0.9
    Fri     1.1
    Sat     1.0

 */
    $scope.energyIn = function() {
        return $scope.entries.reduce(function(prev, current, index, array) {
            return prev + parseInt(current.kilojoules);
        }, 0);
    }

    $scope.isFat = function() {
        // go with 10% around the total energy in

    }
    $scope.addEntry = function(description, kilojoules) {
        $scope.entries.push({
            'description': description,
            'kilojoules': kilojoules
        });
    }
}