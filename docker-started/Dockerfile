# BASIC docker config file

#  step 1) Add BASE environment for running application
# step 2) Create working directory
# step 3) Copy required files for package.json
# step 4) Install NPM packages from package.json file
# step 5) Again copy all file (or) required files
# step 6) expose port
# step 7) Run code 


# 1) Base image for this container environment from Docker Hub
FROM node:18

# 2) Default folder structure follows in docker container
WORKDIR /app

# 3) only copy the package.json file
COPY package.json .

# 4) Package install
RUN npm install --legacy-peer-deps

# 5) Then copy all file after install the npm packages
COPY . .

# 6) Expose port for running 
EXPOSE 1214

# 7) Execute cmd
CMD ["node", "index.js"]

# > docker build .  => this cmd build the container image for this config file

# > docker run -p <expose-port>:<expose-port> <image-id>  => to run  the docker image [-p port:port] => this segment publish the port to from the cotainer to access outside

# > docker ps ==> list all running containers

# docker stop <image-name>  => image name get from 'docker ps' cmd

# Generated image id ==> 60775d178e0ac02588faee3116f550c673a012c6515327842419a82e39721ebe
