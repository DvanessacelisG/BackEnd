FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm link test
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
