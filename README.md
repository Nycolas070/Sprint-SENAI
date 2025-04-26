# Gerenciador de Exercícios - CRUD

## Descrição

Este projeto é uma aplicação web desenvolvida para gerenciar exercícios físicos utilizando as operações CRUD (Criar, Ler, Atualizar e Excluir). A aplicação utiliza React para o frontend, Spring Boot para o backend, e Axios para realizar requisições HTTP entre eles.

## Funcionalidades

- **Criar Exercício**: Adiciona um novo exercício com nome, imagem, séries e repetições.
- **Listar Exercícios**: Exibe todos os exercícios cadastrados em uma tabela.
- **Editar Exercício**: Permite editar os dados de um exercício existente.
- **Excluir Exercício**: Permite deletar um exercício da lista.

## Tecnologias Utilizadas

- **Frontend**:
  - React (v17 ou superior)
  - React-Bootstrap
  - Axios
  - Bootstrap (v5 ou superior) para estilização e layout responsivo

- **Backend**:
  - Spring Boot
  - JPA (Hibernate)
  - Banco de Dados: H2 ou outro configurado no projeto

## Como Rodar o Projeto

### Backend

1. Clone o repositório do backend.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando abaixo para iniciar o Spring Boot:

   ```bash
   ./mvnw spring-boot:run
O backend estará disponível em http://localhost:8080.

Frontend
Clone o repositório do frontend.

Navegue até o diretório do projeto frontend no terminal.

Instale as dependências:

bash
Copiar
Editar
npm install
Execute o comando para rodar o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
O frontend estará disponível em http://localhost:3000.

Como Funciona
Backend (Spring Boot): A API RESTful oferece os endpoints necessários para realizar as operações CRUD nos exercícios. Ela está configurada para responder nas rotas:

GET /listar: Retorna todos os exercícios.

GET /listar/{id}: Retorna um exercício específico pelo ID.

POST /criar: Cria um novo exercício.

PUT /salvar/{id}: Atualiza os dados de um exercício existente.

DELETE /delete/{id}: Deleta um exercício específico.

Frontend (React): A interface permite ao usuário:

Cadastrar um novo exercício.

Editar um exercício existente.

Excluir um exercício.

Exibir uma lista de todos os exercícios cadastrados.

Estrutura do Projeto
Backend (Spring Boot)
css
Copiar
Editar
src
├── main
│   ├── java
│   │   └── com
│   │       └── sprint
│   │           └── treino
│   │               ├── controllers
│   │               ├── entities
│   │               ├── repositories
│   │               └── services
│   └── resources
│       └── application.properties
Frontend (React)
css
Copiar
Editar
src
├── components
│   ├── ExercicioForm.js
│   └── ExercicioList.js
├── services
│   └── exercicioService.js
└── App.js
Contribuições
Contribuições são bem-vindas! Para contribuir, faça um fork do repositório, crie uma branch, faça suas alterações e crie um pull request.