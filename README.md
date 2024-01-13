# Copybase Relatorios Front
### **PS: Antes de rodar o front, não se esqueça de subir o back-end -> [Acesse aqui](https://github.com/caduzindev/copybase-relatorios-back)**

## Descrição

Front-end de uma aplicação que gera relatorios de MRR e Churn Rate a partir de um csv

## Tecnologias Utilizadas

- **Typescript**: Superset do javascript
- **ReactJS**: Superset do javascript
- **React Query**: Para estrategia de long pooling e cache, usado na fila de processamento de relatorios
- **Chackra UI**: Para estilização e design responsivo
- **chat.js + react-chartjs-2**: Criação de graficos iterativos e atraentes
- **react-dropzone**: Para upload de arquivos via arrasta e solta

### Pré-requisitos
- NodeJs(preferivel versoes mais atuais)
- Npm

## Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/caduzindev/copybase-relatorios-front.git
cd copybase-relatorios-front

# Instale as dependências
npm install

#Rode o projeto
npm run start