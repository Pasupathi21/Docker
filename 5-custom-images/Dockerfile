# 1) Create theBASE IMAGE
FROM node

# 3) Specifying working dir
WORKDIR /app

# 2) Copy from all file from this dir
# . -> indicate current dir with and after ./app -> explicitly telling the which dir should contained copied files
COPY package.json /app

# 4) After copied all files we want to install dependencies,RUN => will works on when build the docker image
RUN npm install --legacy-peer-deps

# 7) This step only for optimization technique
#  * docker file works on layered based architecture
# All individual cmds are one layer
# If changes will happen in any one layer after the all layer will run one by one 
# So we no need to run if any code related change to affect to the package.json and othe cmd's
COPY . /app

# 6) This code only works inside the container we want to access the request outside from the CONTAINER we need to EXPOSE the PORT in same network
# Currently this works on aka 'localhost'
EXPOSE 1215 


# 5) If you want to run the server need specify the running cmd, CMD -> works when we run the container, not build time
CMD ["node", "index.js"]