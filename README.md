# Fluxo do Código e Análise de Complexidade

Este documento detalha a análise de fluxo do código, calculando a complexidade ciclomática e descrevendo todos os caminhos possíveis.

## **Grafo de Fluxo**

O grafo de fluxo do código é composto pelos seguintes pontos principais e suas interações:

1. **Início**
2. **Método `conectarBD()`**
3. **Classe `Class.forName("com.mysql.Driver").newInstance()`**
4. **URL de conexão**
5. **`conn = DriverManager.getConnection(url)`**
6. **Exceção capturada**
7. **Retorno de `conn`**
8. **Método `verificarUsuario()`**
9. **Chamada ao método `conectarBD()`**
10. **Construção da consulta SQL**
11. **Criação do `Statement`**
12. **Execução do SQL com `st.executeQuery()`**
13. **`if (rs.next())` - Verificação de resultados**
14. **`result = true` - Usuário válido**
15. **`nome = rs.getString("nome")` - Armazenamento do nome**
16. **Exceção capturada (dentro de `verificarUsuario()`)**
17. **Retorno de `result`**

## **Cálculo da Complexidade Ciclomática**

A complexidade ciclomática é uma métrica que mede o número de caminhos independentes em um programa. O cálculo para o código é:

\[
V(G) = 18 - 17 + 2(1) = 3
\]

Portanto, a **complexidade ciclomática** do código é **3**.

## **Sequências de Caminhos**

Os caminhos possíveis para execução do código são:

1. **Caminho 1**: 
   - Início → Método `conectarBD()` → `conn = DriverManager.getConnection(url)` → Retorno de `conn`
   - Início → Método `verificarUsuario()` → Chamada ao método `conectarBD()` → Criação do `Statement` → Execução do SQL → `if (rs.next())` → `result = true` → `nome = rs.getString("nome")` → Retorno de `result`

2. **Caminho 2**: 
   - Início → Método `conectarBD()` → Exceção capturada → Retorno de `conn`
   - Início → Método `verificarUsuario()` → Chamada ao método `conectarBD()` → Exceção capturada → Retorno de `result`

3. **Caminho 3**: 
   - Início → Método `conectarBD()` → `conn = DriverManager.getConnection(url)` → Retorno de `conn`
   - Início → Método `verificarUsuario()` → Chamada ao método `conectarBD()` → Criação do `Statement` → Execução do SQL → `if (rs.next())` → Exceção capturada → Retorno de `result`
