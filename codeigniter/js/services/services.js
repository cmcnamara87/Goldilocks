goldilocks.service('Api', function() {
    this.baseUrl = (function() {
//        var url = window.location.origin;
//        if (!window.location.origin) {
//            // make other browsers match up with how webkit does it
//            url = window.location.origin = window.location.protocol + "//" + window.location.host;
//        }

        // Replace : with \\: for angularjs
        var url = window.location.protocol + "//" + window.location.host.replace(":", "\\:");

        return url + '/index.php/api/';
    })();

});

// Stores session variables
goldilocks.factory('Session', function() {
    return {}
})


goldilocks.factory('Day', function($resource, Api) {
    return $resource(Api.baseUrl + 'day/id/:id', {
        id: '@id'
    }, {
        'today': {
            method: "GET",
            params: {
                'type': 'today'
            }
        }
    });
});

goldilocks.factory('User', function($resource, Api) {
    return $resource(Api.baseUrl + 'user/id/:id', {
        id: '@id'
    }, {
        'login': {
            method: "GET",
            params: {
                'type': 'login'
            }
        }
    });
});

goldilocks.factory('Meal', function($resource, Api) {
    return $resource(Api.baseUrl + 'meal/id/:id', {
        id: '@id'
    });
});

goldilocks.factory('Weight', function($resource, Api) {
    return $resource(Api.baseUrl + 'weight/id/:id', {
        id: '@id'
    });
});