# Sistema de Autenticação de Usuários

Este repositório contém um sistema de autenticação de usuários que utiliza um banco de dados MySQL para armazenar e verificar credenciais de login.

## Funcionalidades

* Estabelece conexão com o banco de dados MySQL
* Verifica se o login e a senha fornecidos correspondem a um usuário válido no banco de dados
* Armazena o nome do usuário autenticado, caso a validação seja bem-sucedida

## Classe `User`

A classe `User` é responsável pela autenticação de usuários e contém os seguintes métodos e atributos:

* `conectarBD()`: Estabelece a conexão com o banco de dados MySQL e retorna um objeto `Connection`.
* `nome`: Armazena o nome do usuário autenticado, caso a validação seja bem-sucedida.
* `result`: Um booleano que indica se o usuário é válido (`true`) ou não (`false`).
* `verificarUsuario(String login, String senha)`: Verifica se o login e a senha fornecidos correspondem a um usuário válido no banco de dados e retorna `true` se o usuário for válido, `false` caso contrário.

## Considerações de Segurança

Embora o sistema funcione, existem várias considerações de segurança e melhorias que devem ser implementadas:

* Tratamento de erros: O tratamento de erros está ausente. É importante capturar e registrar exceções para facilitar a depuração e a manutenção do código.
* Criptografia de senhas: As senhas são armazenadas e verificadas em texto simples. É altamente recomendável usar uma biblioteca de criptografia, como `bcrypt`, para armazenar senhas de forma segura.
* Prevenção de injeção de SQL: O código atual é vulnerável a ataques de injeção de SQL, pois concatena strings para construir consultas SQL. Utilize `PreparedStatement` para evitar esse tipo de vulnerabilidade.
* Gerenciamento de conexões: O código não fecha a conexão com o banco de dados após a execução das consultas. É importante garantir que as conexões sejam fechadas para evitar vazamentos de recursos.
