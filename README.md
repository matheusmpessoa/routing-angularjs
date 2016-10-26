# routing-angularjs
Template de uma página controlada por roteamento em AngularJS.

Ideal para utilizar como base em um projeto em que se tem navegação de páginas.

## Projeto online
__[Confira aqui](https://matheusmpessoa.github.io/routing-angularjs/#/)__

## Tamanho do projeto
42.0 mb

## Linguagens utilizadas
* HTML5
* JavaScript

## Frameworks e bibliotecas utilizados
* Bootstrap 3
* AngularJS
* jQuery

---

## Como funciona o roteamento do AngularJS

### Como adicionar uma página
1. Crie uma nova página na pasta pages.
2. Vá no arquivo *app.js*
3. Adicione a rota desejada no *.when*.
4. Adicione o local do arquivo que será roteado no *templateUrl*.
5. Adicione o controller utilizado pela rota com o *controller*.

A configuração da rota deverá ser semelhante a essa:
```js
.when('/rotadesejada', {
    templateUrl: 'pages/nomedorarquivo.html',
    controller: 'nomedoController'
})
```

### ngRoute
O ngRoute é utilizado para navegar por diferentes páginas em uma aplicação SPA (Single Page Application), sem o reload na página.

O ngRoute é definido assim no arquivo *app.js*.
```js
var app = angular.module('app', ['ngRoute']);
```

### Angular route
Para o roteamento funcionar é necessário o arquivo mínimo do *angular-route*, além do arquivo mínimo do *angularjs*.

### $routeProvider
O $routeProvider define qual página será exibida quando o usuário clicar em um link.

```js
app.config(function ($routeProvider) {
    $routeProvider
});
```