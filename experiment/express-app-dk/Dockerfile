FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 1122

CMD ["npm", "run", "start"]