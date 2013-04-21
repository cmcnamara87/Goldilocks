goldilocks.service('Api', function() {
    this.baseUrl = 'http://localhost\\:8888/index.php/api/';
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