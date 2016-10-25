// Criação do modulo angular
var app = angular.module('app', ['ngRoute', 'starter.controllers', 'starter.directives']);

// Configuração de rotas
app.config(function ($routeProvider) {
    $routeProvider

    // Rota para a página home
        .when('/', {
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

    // Se não for redirecionado para nenhuma página acima a página de erro será acionada.
    .otherwise({
        redirectTo: '/404'
    });
});
