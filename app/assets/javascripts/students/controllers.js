app.controller('StudentsCtrl', function ($scope, StudentsService, $timeout) {
    
    $scope.index = function() {
        StudentsService.index(
            function(data) {
                $scope.students = data;
            },
            function(data) {
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao consultar os estudantes!';
                clearAlert();
            }
        );
    };
    
    $scope.new = function() {
        $scope.student = {};
    };
    
    $scope.methodSave = function() {
        if ($scope.student.id) {
            $scope.update($scope.student.id);
        } else {
            $scope.save();
        }
    };
    
    $scope.save = function() {
        StudentsService.save($scope.student,
            function() {
                $('#new').modal('hide');
                $scope.index();

                $scope.alert.success = 'Estudante cadastrado com sucesso!';
                clearAlert();
            },
            function(data) {
                $('#new').modal('hide');
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao salvar o estudante!';
                clearAlert();
            }
        );
    };

    $scope.edit = function(id) {
        StudentsService.show({id: id},
            function(data) {
                $scope.student = data;
            },
            function(data) {
                console.error(data);

                $scope.alert.problem = 'Ocorreu um problema ao consultar o estudante!';
                clearAlert();
            }
        );
    };  
    
    $scope.update = function(id) {
        StudentsService.update({id: id}, $scope.student,
            function() {
                $('#new').modal('hide');
                $scope.index();

                $scope.alert.success = 'Estudante atualizado com sucesso!';
                clearAlert();
            },
            function(data) {
                $('#new').modal('hide');
                console.log(data);

                $scope.alert.problem = 'Ocorreu um problema ao atualizar o estudante!';
                clearAlert();
            }
        );
    };

    $scope.remove = function(id) {
        if (confirm('Realmente deseja excluir o estudante ' + id + '?')) {
            StudentsService.remove({id: id},
                function() {
                    $scope.index();

                    $scope.alert.success = 'Estudante removido com sucesso!';
                    clearAlert();
                },
                function(data) {
                    console.log(data);

                    $scope.alert.problem = 'Ocorreu um problema ao remover o estudante!';
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