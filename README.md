### Instalando dependências
```
$ npm install
```
### Subindo imagem mysql
```
$ docker-compose up
```
### Identificando id container
```
$ docker ps
```
### Entrando no banco
```
$ docker exec -it inseriraquiiddocontainer bash
$ mysql
```
### Criando database
```
> create database petshop;
> show databases;
```
### Criando tabela
```
$ node api/bancoDeDados/criarTabela.js
```
### Instalando guia de estilos
```
$ npm install eslint
```
### Usando guia de estilos
```
$ npm run lint
$ npm run lint:fix
```
### Instalando framework para testes
```
$ npm install --save-dev jest
```
### Rodar testes
```
$ npm t
```