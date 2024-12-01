Erros que podem causar problemas no codígo:

1- No método conectarBD(), a exceção é colocada, porém não á um tratamento do erro que pode acontecer ao tentar se conectar com o banco de dados. Isso faz com que, se algo der errado, não seja possível saber o motivo, dificultando descobrir e resolver o problema.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Com a senha não criptografada o código verifica a mesma exatamente como ela foi digitada. Guardar ou usar senhas dessa forma no banco de dados não é seguro, pois deixa o sistema vulnerável a possíveis ataques.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3- 1- No método verificarUsuario(), a exceção é colocada, porém não á um tratamento do erro que pode acontecer. Isso faz com que, se algo der errado, não seja possível saber o motivo, dificultando descobrir e resolver o problema.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
