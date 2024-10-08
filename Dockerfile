# Usando a imagem oficial do Node.js 18
FROM node:18

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando os arquivos de dependências
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Expondo a porta do Vite (geralmente 5173)
EXPOSE 5173

# Comando para iniciar o Vite no modo de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
