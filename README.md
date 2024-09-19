# Projeto Bot Telegram 
# Sistema de Sinais Desportivos - Telegram com Dashboard SaaS

## Descrição
Este projeto é um sistema SaaS para envio de sinais desportivos via Telegram e dashboard de gerenciamento. O sistema oferece integração com APIs de dados de futebol e análise preditiva usando IA.

## Funcionalidades
- Cadastro de usuários e autenticação via Telegram e SMS.
- Envio automático de sinais de jogos com base em análise preditiva.
- Gerenciamento de APIs e configuração de planos.
- Pagamentos via PicPay.
- Notificações de tips e configurações personalizadas.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-sinais-desportivos.git
    cd projeto-sinais-desportivos
    ```

2. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` e defina as seguintes variáveis:
    ```bash
    MONGO_URI=mongodb://seu-usuario:senha@localhost:27017/bot_telegram
    JWT_SECRET=secreta-chave
    FOOTYSTATS_API_KEY=sua-chave
    HIGHLIGHTLY_API_KEY=sua-chave
    PICPAY_API_KEY=sua-chave
    ```

4. Inicie o servidor:
    ```bash
    npm run start
    ```

## Documentação da API
- `/api/users/register` - Cadastro de usuários
- `/api/users/login` - Login de usuários
- `/api/tips/all` - Listar todos os sinais

## Configuração da API
- Certifique-se de que as chaves de API estão configuradas corretamente no painel de admin.
