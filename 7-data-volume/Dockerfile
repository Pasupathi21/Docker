FROM node:18

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

#  we can set env var inside the dockerfile

# ARG is ARGUMENT and this will value will be assign in build time with cmd: docker build -t <IMG_NAME>:<TAG> --build-arg DEFAULT_PORT=<PORT_NUM> 
ARG DEFAULT_PORT 
ARG IS_MULTIPLE 

# Below the line we set the ARG to ENV 
ENV PORT ${DEFAULT_PORT}

ENV MULTI_ARG ${IS_MULTIPLE}

EXPOSE ${PORT}

# EXPOSE 1221

CMD ["node", "server.js"]