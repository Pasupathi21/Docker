FROM node:18

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

#  we can set env var inside the dockerfile

# ENV POST 1227

# $PORT is variable to 
# EXPOSE $PORT

EXPOSE 1221

CMD ["node", "server.js"]