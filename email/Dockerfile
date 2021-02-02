FROM node:15

#app directory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

RUN npm install

#bundle app source
COPY . .

EXPOSE 10000

CMD ["node", "emailserver.js"]
