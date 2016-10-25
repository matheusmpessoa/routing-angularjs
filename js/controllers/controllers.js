var app = angular.module('starter.controllers', [])

// Criação do angular controller e injeção ao angular scope
app.controller('mainCtrl', function ($scope) {
    // criação da mensagem para display
    $scope.message = 'Olá! Você está na home.';
});

app.controller('sobreCtrl', function ($scope) {
    $scope.message = 'Olá! Você está na página sobre.';
});

app.controller('contatoCtrl', function ($scope) {
    $scope.message = 'Olá! Você está na página de contato.';
});

app.controller('erroCtrl', function ($scope) {
    $scope.message = 'Erro 404. Você caiu no limbo.';
});
