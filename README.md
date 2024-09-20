# 1.Instalando o react-router-dom
npm install react-router-dom

# 2. Instalando o styled-components
npm install styled-components

# 3. Instalando o servidor json
npm install json-server

# 3.1 Configurando o json
EM package.jason: "backend": "json-server --watch dados.json --port 5000"

# 3.2 Criando a pag. dados.json
{
    "usuarios":[
        {
            "usuario":"Admin",
            "senha":"12345"
        },
        {
            "usuario":"Gabriel",
            "senha":"123456"
        }
    ]
}