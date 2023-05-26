FROM node:latest

RUN mkdir /mc-status
WORKDIR /mc-status

COPY package.json /mc-status
RUN npm install

COPY . /mc-status

CMD ["node", "app.js"]
