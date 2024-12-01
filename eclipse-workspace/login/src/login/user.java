package login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * Classe responsável pela autenticação de usuários em um sistema utilizando um banco de dados MySQL.
 */
public class user {
    
    /**
     * Método para estabelecer a conexão com o banco de dados MySQL.
     * 
     * @return Um objeto Connection que representa a conexão com o banco de dados.
     */
    public Connection conectarBD() {
        Connection conn = null;
        try {
            // Carrega o driver do MySQL
            Class.forName("com.mysql.Driver").newInstance();
            
            // URL de conexão com o banco de dados
            String url = "jdbc:mysql://127.0.0.1/test?user=lopes&password=123";
            
            // Estabelece a conexão com o banco de dados
            conn = DriverManager.getConnection(url);
        } catch (Exception e) {
            // Erro ao conectar no banco de dados. Tratamento de erro omitido.
        }
        return conn;
    }

    /** Nome do usuário autenticado, caso a validação seja bem-sucedida. */
    public String nome = "";

    /** Resultado da verificação do usuário: true se válido, false caso contrário. */
    public boolean result = false;

    /**
     * Método para verificar se o login e a senha fornecidos correspondem a um usuário válido no banco de dados.
     * 
     * @param login O login do usuário.
     * @param senha A senha do usuário.
     * @return true se o usuário for válido, false caso contrário.
     */
    public boolean verificarUsuario(String login, String senha) {
        // Inicialização da instrução SQL
        String sql = "";
        Connection conn = conectarBD();
        
        // Construção da consulta SQL
        sql += "select nome from usuarios ";
        sql += "where login = '" + login + "'";
        sql += " and senha = '" + senha + "';";
        
        try {
            // Cria um statement para executar a consulta
            Statement st = conn.createStatement();
            
            // Executa a consulta e obtém os resultados
            ResultSet rs = st.executeQuery(sql);
            
            // Verifica se há algum resultado
            if (rs.next()) {
                result = true; // Usuário válido
                nome = rs.getString("nome"); // Nome do usuário autenticado
            }
        } catch (Exception e) {
            // Erro durante a execução da consulta. Tratamento de erro omitido.
        }
        return result;
    }
}
// Fim da classe
