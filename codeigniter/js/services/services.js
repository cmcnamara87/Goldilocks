goldilocks.service('Api', function() {
    this.baseUrl = (function() {
        if (!window.location.origin) {
            // make other browsers match up with how webkit does it
            window.location.origin = window.location.protocol + "//" + window.location.host;
        }
        return window.location.origin + '/';
    })();

});

// Stores session variables
goldilocks.factory('Session', function() {
    return {}
})

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


goldilocks.factory('Weight', function($resource, Api) {
    return $resource(Api.baseUrl + 'weight/id/:id', {
        id: '@id'
    });
});