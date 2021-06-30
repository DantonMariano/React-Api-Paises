# CONSUMO DE API REST 
##  - [LIVE TEST!](https://react-api-paises.netlify.app/)
## utilizando AXIOS fazendo consultas à API da restcountries.eu
# Referência da API
#### GET todos os países
```http
  GET restcountries.eu/rest/v2/all
```
Sem paramêtros necessários para enviar consulta.

#### GET País por nome

```http
  GET restcountries.eu/rest/v2/name/{nome}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Obrigatório** Nome do País |


  
## Bibliotecas

 - [Restcountries.eu](https://restcountries.eu/)
 - [AXIOS](https://github.com/axios/axios)
 - [React](https://github.com/facebook/react)

  
## Execute localmente

Clone o projeto

```bash
  git clone https://github.com/DantonMariano/React-Api-Paises
```

Mude o diretório para o projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
  npm run start
```

  
