# install latest node
FROM node:latest

# create and set app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# install app dependencies
COPY package.json .
RUN npm i

# copy app source to destination container
COPY . .

# expose container port
EXPOSE 3000

CMD npm start
