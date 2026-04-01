# 🍕 Pizzaria API - Frontend

Este é o ecossistema visual da nossa pizzaria, desenvolvido em Angular para consumir a [Pizzaria API (Backend)](link-do-seu-repo-backend). O projeto foca em oferecer uma experiência fluida tanto para o cliente final quanto para a gestão administrativa.

## 🚀 Tecnologias Utilizadas
* **Angular 17+**: Framework principal para a construção da SPA (Single Page Application).
* **TypeScript**: Garantindo tipagem estrita e menos erros em tempo de execução.
* **CSS3**: Estilização personalizada para uma interface moderna.
* **Angular CLI**: Automação de builds e geração de componentes.

## 🛠️ Funcionalidades em Desenvolvimento
* **Autenticação Segura**: Integração com JWT gerado pelo backend.
* **Visão do Cliente**: Catálogo de pizzas e acompanhamento de pedidos.
* **Painel Administrativo**: Gestão de produtos e status de produção.

## 📋 Roadmap de Sprints (Frontend)

* [x] **Sprint 01: Fundação e Arquitetura Inicial**
    * Setup do projeto com Angular CLI.
    * Estruturação de pastas (`pages`, `components`, `services`).
    * Criação dos componentes base: Login, Home (Cliente) e Painel (Admin).
* [ ] **Sprint 02: Roteamento e Navegação**
    * Configuração do `app.routes.ts`.
    * Criação de menus de navegação.
* [ ] **Sprint 03: Integração com Backend (Autenticação)**
    * Implementação do AuthService no Angular.
    * Consumo do endpoint `/login` e armazenamento do Token.

## 🔧 Como Rodar o Projeto
1. Clone o repositório.
2. Certifique-se de ter o Node.js instalado.
3. Instale as dependências: `npm install`.
4. Inicie o servidor de desenvolvimento: `ng serve`.
5. Acesse `http://localhost:4200/`.