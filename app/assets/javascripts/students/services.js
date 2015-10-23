app.factory('StudentsService', function($resource) {
    return $resource('/api/students/:id', {}, {
        index: {method: 'GET', isArray: true},
        save: {method: 'POST'},
        show: {method: 'GET'},        
        update: {method: 'PUT'},
        remove: {method: 'DELETE'},
        active: {method: 'GET', isArray: true, params: {active: true}}
    });
});