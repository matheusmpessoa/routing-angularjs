// Criação do modulo angular
var app = angular.module('app', ['ngRoute']);

// Configuração de rotas
app.config(function ($routeProvider) {
    $routeProvider

    // Rota para a página home
        .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'mainCtrl'
    })

    // Rota para a página sobre
    .when('/sobre', {
        templateUrl: 'pages/sobre.html',
        controller: 'sobreCtrl'
    })

    // Rota para a página contato
    .when('/contato', {
        templateUrl: 'pages/contato.html',
        controller: 'contatoCtrl'
    })

    // Rota para a página de erro 404
    .when('/404', {
        templateUrl: 'pages/404.html',
        controller: 'erroCtrl'
    })

    .otherwise({
        redirectTo: '/404'
    });
});


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


// Injeção de dependência do header
app.directive("myHeader", function () {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "pages/template/header.html"
    };
});

// Injeção de dependência do footer
app.directive("myFooter", function () {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "pages/template/footer.html"
    };
});
