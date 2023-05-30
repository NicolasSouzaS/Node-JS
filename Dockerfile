# O comando FROM faz o download da imagem do node na versão 18
FROM node:18
# WORKDIR é o diretório onde o projeto será instalado dentro da imagem
WORKDIR /usr/src/app
# Estamos copiando todos os arquivos package json e colando no diretório de trabalho(WORKDIR) app,
# definido ácima
COPY package*.json ./
# Em seguida estamos copiando tudo que há dentro da pasta "PRIMEIRONODE" também
# para o diretório de trabalho (WORKDIR) app
COPY . .
# Com o comando RUN estamos pedindo para que junto da imagem, faça a instalação das dependencias
# dentro do diretório app
RUN npm install
# Instalando no sistema o modulo nodemon
RUN nmp i -g nodemon
# Expondo a porta de comunicação da aplicação no caso 3030
EXPOSE 3030
# CMD para fazer a execução do index.js também a aplicação.
CMD ["nodemon","index.js"]
