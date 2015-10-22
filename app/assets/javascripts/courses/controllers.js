app.controller('CoursesCtrl', function ($scope, CoursesService, $timeout) {
    
    $scope.index = function() {
        CoursesService.index(
            function(data) {
                $scope.courses = data;
            },
            function(data) {
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao consultar os cursos!';
                clearAlert();
            }
        );
    };
    
    $scope.new = function() {
        $scope.course = {};
    };
    
    $scope.methodSave = function() {
        if ($scope.course.id) {
            $scope.update($scope.course.id);
        } else {
            $scope.save();
        }
    };
    
    $scope.save = function() {
        CoursesService.save($scope.course,
            function() {
                $('#new').modal('hide');
                $scope.index();

                $scope.alert.success = 'Curso cadastrado com sucesso!';
                clearAlert();
            },
            function(data) {
                $('#new').modal('hide');
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao salvar o curso!';
                clearAlert();
            }
        );
    };

    $scope.edit = function(id) {
        CoursesService.show({id: id},
            function(data) {
                $scope.course = data;
            },
            function(data) {
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao consultar o curso!';
                clearAlert();
            }
        );
    };  
    
    $scope.update = function(id) {
        CoursesService.update({id: id}, $scope.course,
            function() {
                $('#new').modal('hide');
                $scope.index();

                $scope.alert.success = 'Curso atualizado com sucesso!';
                clearAlert();
            },
            function(data) {
                $('#new').modal('hide');
                console.log(data);

                $scope.alert.problem = 'Ocorreu um problema ao atualizar o curso!';
                clearAlert();
            }
        );
    };

    $scope.remove = function(id) {
        if (confirm('Realmente deseja excluir o curso ' + id + '?')) {
            CoursesService.remove({id: id},
                function() {
                    $scope.index();

                    $scope.alert.success = 'Curso removido com sucesso!';
                    clearAlert();
                },
                function(data) {
                    console.log(data);

                    $scope.alert.problem = 'Ocorreu um problema ao remover o curso!';
                    clearAlert();
                }
            );
        }
    };    

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