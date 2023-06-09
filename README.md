# Subscription Management System

## subscription-management-system
Projeto para a disciplina de Frameworks Web do XXIV Curso de Especialização em Tecnologia Java (2022_01)

Ideia é ter um controle onde o usuário vai entrar com o dados das assinaturas
Controlar quais são as assinaturas, o valor, a recorrência de pagamento (se existir) e o tempo para vencimento.

## Endereço de Deploy - GitHub Pages
https://tiagoluizfernandes.github.io/subscription-management-system

## Protótipos
![Login](wireframes/Page%201.svg)

![Home + Menu](wireframes/Page%202.svg)

![Types of Subscription - List](wireframes/Page%203.svg)

![Type of Subscription - Form](wireframes/Page%204.svg)

![Subscriptions - List](wireframes/Page%205.svg)

![Subscription - Form](wireframes/Page%206.svg)

## Checklist

- [X] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [X] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X] Construir páginas web com o conceito de componentes.
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X] Mapear componentes à rotas no módulo de rotas.
- [X] Criar navegação entre páginas por meio de rotas.
- [X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [X] Validar campos do formulário com REGEX e apresentar os erros.
- [X] Desabilitar o botão de submit enquanto o formulário está inválido.
- [X] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [X] Cadastrar uma entidade no JSON Server.
- [X] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [X] Usar a diretiva ngIf
- [X] Formatar a apresentação de dados com Pipes.
- [X] Build e deploy da aplicação.

## Manual de execução
### Local
ng build --configuration=production
npx http-server .\dist\subscription-management-system\

### Git Hub Pages
ng deploy
