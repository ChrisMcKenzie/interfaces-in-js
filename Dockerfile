FROM node:7.2-alpine

ENV NODE_PATH .
WORKDIR /usr/src/app

COPY build /usr/src/app
COPY package.json /usr/src/app

RUN npm install --production

CMD ["node", "index.js"]
