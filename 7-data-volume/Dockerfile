FROM node:18

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 1221

CMD ["node", "server.js"]