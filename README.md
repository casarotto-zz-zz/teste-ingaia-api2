# inGaia - Back-end Developer - API2

-  Recebe quantidade de metros quadrados e calcula o valor do imóvel.

## Arquitetura

- A arquitetura foi baseada nos princípios SOLID e de arquitetura limpa onde:
* A pasta "config" carrega toda inicialização da aplicação;
* A pasta "core" contém as entidades e os casos de uso, que ficam no centro da aplicação;
* A pasta "data" contém todos os dados acessados pela aplicação;
* A pasta "entrypoint" contém todo o código relacionado à interação com a api.

## Instruções

- Configurar arquivo __.env__ de acordo com o arquivo __.env.example__;
- O serviço pode ser inicializado/acessado de 3 maneiras:
* __Node__: com o comando `yarn && yarn start`
* __Docker__: com o comando `yarn && yarn start:docker`
* __Heroku__: https://ts-ingaia-api2.herokuapp.com/api-docs/

- A api foi documentada utilizando __swagger__, que pode ser acessado pela rota `/api-docs`


