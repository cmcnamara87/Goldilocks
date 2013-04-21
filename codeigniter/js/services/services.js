goldilocks.service('Api', function() {
    this.onlineServer = 'http://goldilocks.me/';
    this.localServer = 'http://localhost\\:8888/';

    this.baseUrl = this.onlineServer + 'index.php/api/';
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