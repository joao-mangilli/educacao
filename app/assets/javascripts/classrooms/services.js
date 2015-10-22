app.factory('ClassRoomsService', function($resource) {
    return $resource('/api/classrooms/:id', {}, {
        index: {method: 'GET', isArray: true},
        save: {method: 'POST'},
        show: {method: 'GET'},        
        update: {method: 'PUT'},
        remove: {method: 'DELETE'}
    });
});