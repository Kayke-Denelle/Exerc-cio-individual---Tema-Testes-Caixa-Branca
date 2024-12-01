# Teste de Caixa Branca (Estático)

## Problemas Identificados

### 1. Tratamento de Erros na Conexão com o Banco de Dados
- **Descrição**: No método `conectarBD()`, a exceção é lançada, mas não há tratamento para erros que podem ocorrer ao tentar se conectar ao banco de dados.
- **Impacto**: Se algo der errado, não será possível identificar o motivo, dificultando a resolução do problema.

### 2. Senhas Não Criptografadas
- **Descrição**: O sistema verifica a senha exatamente como foi digitada, sem criptografia.
- **Impacto**: Armazenar ou usar senhas dessa forma no banco de dados é inseguro e deixa o sistema vulnerável a ataques.

### 3. Tratamento de Erros na Verificação do Usuário
- **Descrição**: No método `verificarUsuario()`, a exceção é lançada, mas não há tratamento para erros que podem ocorrer.
- **Impacto**: Se algo der errado, não será possível identificar o motivo, dificultando a resolução do problema.

### 4. Verificação de Conexão Nula
- **Descrição**: No método `verificarUsuario()`, se a conexão com o banco de dados falhar e retornar `null`, o código ainda tenta criar a consulta.
- **Impacto**: Isso pode gerar erros durante a execução.

### 5. Vulnerabilidade a Injeção de SQL
- **Descrição**: O código monta o comando SQL concatenando os valores de login e senha em uma string.
- **Impacto**: Isso pode deixar o sistema aberto a ataques de injeção de SQL e causar erros se os valores contiverem caracteres especiais.

### 6. Variáveis Desnecessárias
- **Descrição**: As variáveis `nome` e `result` estão definidas para toda a classe, mas são utilizadas apenas no método `verificarUsuario()`.
- **Impacto**: Isso polui o escopo da classe e dificulta a compreensão do código.

## Sugestões de Melhoria

1. **Implementar Tratamento de Erros**: Adicione blocos `try-catch` para capturar e tratar exceções nas funções `conectarBD()` e `verificarUsuario()`.
   
2. **Criptografar Senhas**: Utilize bibliotecas como `bcrypt` para criptografar senhas antes de armazená-las no banco de dados.

3. **Verificar Conexão Antes de Consultas**: Adicione uma verificação para garantir que a conexão com o banco de dados não seja `null` antes de executar consultas.

4. **Utilizar Prepared Statements**: Em vez de concatenar strings para criar comandos SQL, utilize prepared statements para evitar injeções de SQL.

5. **Limitar o Escopo das Variáveis**: Defina as variáveis `nome` e `result` dentro do método `verificarUsuario()` para melhorar a legibilidade e a manutenção do código.

## Conclusão

A implementação dessas melhorias não apenas tornará o sistema mais seguro, mas também facilitará a manutenção e a compreensão do código. A segurança deve ser uma prioridade em qualquer sistema que manipule dados sensíveis, como credenciais de usuários.

