Erros que podem causar problemas no codígo:

1- No método conectarBD(), a exceção é colocada, porém não á um tratamento do erro que pode acontecer ao tentar se conectar com o banco de dados. Isso faz com que, se algo der errado, não seja possível saber o motivo, dificultando descobrir e resolver o problema, segue a parte do codigo em questão:

public Connection conectarBD() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.Driver").newInstance();
            String url = "jdbc:mysql://127.0.0.1/test?user=lopes&password=123";
            conn = DriverManager.getConnection(url);
        } catch (Exception e) { }  
        return conn;
    }
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Com a senha não criptografada o código verifica a mesma exatamente como ela foi digitada. Guardar ou usar senhas dessa forma no banco de dados não é seguro, pois deixa o sistema vulnerável a possíveis ataques, segue a parte do codigo em questão:

  public String nome = "";
  public boolean result = false;
  
  public boolean verificarUsuario(String login, String senha) {
        String sql = "";
        Connection conn = conectarBD();
        // INSTRUÇÃO SQL
        sql += "select nome from usuarios ";
        sql += "where login = '" + login + "'";
        sql += " and senha = '" + senha + "';";
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(sql);
            if (rs.next()) {
                result = true;
                nome = rs.getString("nome");
            }
        } catch (Exception e) { }
        return result;
    }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3- 1- No método verificarUsuario(), a exceção é colocada, porém não á um tratamento do erro que pode acontecer. Isso faz com que, se algo der errado, não seja possível saber o motivo, dificultando descobrir e resolver o problema, segue a parte do codigo em questão:

public boolean verificarUsuario(String login, String senha) {
        String sql = "";
        Connection conn = conectarBD();
        // INSTRUÇÃO SQL
        sql += "select nome from usuarios ";
        sql += "where login = '" + login + "'";
        sql += " and senha = '" + senha + "';";
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(sql);
            if (rs.next()) {
                result = true;
                nome = rs.getString("nome");
            }
        } catch (Exception e) { }
        return result;
    }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
