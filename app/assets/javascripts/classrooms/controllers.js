app.controller('ClassRoomsCtrl', function ($scope, ClassRoomsService, $timeout,
                                        CoursesService, StudentsService) {
    
    $scope.index = function() {
        ClassRoomsService.index(
            function(data) {
                $scope.classrooms = data;
            },
            function(data) {
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao consultar as matrículas!';
                clearAlert();
            }
        );
    };
    
    $scope.new = function() {
        $scope.classroom = {};
        
        getDependents();
    };
    
    $scope.methodSave = function() {
        if ($scope.classroom.id) {
            $scope.update($scope.classroom.id);
        } else {
            $scope.save();
        }
    };
    
    $scope.save = function() {
        ClassRoomsService.save($scope.classroom,
            function() {
                $('#new').modal('hide');
                $scope.index();

                $scope.alert.success = 'Matrícula cadastrada com sucesso!';
                clearAlert();
            },
            function(data) {
                $('#new').modal('hide');
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao salvar a matrícula!';
                clearAlert();
            }
        );
    };

    $scope.edit = function(id) {        
        ClassRoomsService.show({id: id},
            function(data) {
                $scope.classroom = data;
            },
            function(data) {
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao consultar a matrícula!';
                clearAlert();
            }
        );

        getDependents();
    };  
    
    $scope.update = function(id) {
        ClassRoomsService.update({id: id}, $scope.classroom,
            function() {
                $('#new').modal('hide');
                $scope.index();

                $scope.alert.success = 'Matrícula atualizada com sucesso!';
                clearAlert();
            },
            function(data) {
                $('#new').modal('hide');
                console.log(data);

                $scope.alert.problem = 'Ocorreu um problema ao atualizar a matrícula!';
                clearAlert();
            }
        );
    };

    $scope.remove = function(id) {
        if (confirm('Realmente deseja excluir a matrícula ' + id + '?')) {
            ClassRoomsService.remove({id: id},
                function() {
                    $scope.index();

                    $scope.alert.success = 'Matrícula removida com sucesso!';
                    clearAlert();
                },
                function(data) {
                    console.log(data);

                    $scope.alert.problem = 'Ocorreu um problema ao remover a matrícula!';
                    clearAlert();
                }
            );
        }
    };    
    
    function getDependents() {
        CoursesService.active(function(data) {
            $scope.courses = data;
        });
        StudentsService.active(function(data) {
            $scope.students = data;
        });
    }

    function clearAlert(time) {
        if (time) {
            $timeout(function() {
                $scope.alert = {};
            }, time);
        } else {
            $timeout(function() {
                $scope.alert = {};
            }, 1000 * 5);
        }
    }

    function init() {
        $scope.index();
        clearAlert(0);
    }

    init();

});