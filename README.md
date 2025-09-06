# Monorepo-NestJS-Nx

Este repostório contém um monorepo configurado com o Nx, que inclui duas aplicações NestJS com uma biblioteca compartilhada.

- A ideia é que com essa estrutura, seja possível compartilhar o mesmo schema do Prisma mas separando os arquivos de cada aplicação.
- Onde o Nx gerencia a estrutura do monorepo, mas cada aplicação NestJS é independente.

## Estrutura do Repositório

- `apps/`
  - `PostApp/src/app/Post/`: Aplicação que lida com a tabela de posts.
    - `dto/`: Diretório para objetos de transferência de dados (DTOs).
    - `posts.module.ts`: Módulo da resource Posts
    - `posts.controller.ts`: Controlador
    - `posts.service.ts`: Serviço
  - `UserApp/src/app/User/`: Aplicação que lida com a tabela de usuários.
    - `dto/`: Diretório para objetos de transferência de dados (DTOs).
    - `users.module.ts`: Módulo da resource Users
    - `users.controller.ts`: Controlador
    - `users.service.ts`: Serviço
- `libs/prisma/`: Biblioteca compartilhada que contém a configuração do Prisma ORM.
  - `prisma.schema`: Definição do esquema do banco de dados.
  - `index.ts`: Exporta o PrismaModule e PrismaService.
  - `lib/`:
    - `prisma.module.ts`: Módulo Prisma.
    - `prisma.service.ts`: Serviço Prisma.

### Extensões VSCode recomendadas

- [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) (executa comandos do Nx via interface gráfica)

### Referências

- [@nx/nest](https://nx.dev/technologies/node/nest/introduction#setting-up-nxnest)
- [recipes/prisma](https://docs.nestjs.com/recipes/prisma)
- [recipes/crud-generator](https://docs.nestjs.com/recipes/crud-generator#introduction)
