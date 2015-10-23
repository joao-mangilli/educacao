app.factory('CoursesService', function($resource) {
    return $resource('/api/courses/:id', {}, {
        index: {method: 'GET', isArray: true},
        save: {method: 'POST'},
        show: {method: 'GET'},        
        update: {method: 'PUT'},
        remove: {method: 'DELETE'},
        active: {method: 'GET', isArray: true, params: {active: true}}
    });
});