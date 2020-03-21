FROM node:12.16.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm prune --production

CMD [ "node", "dist/index.js" ]
