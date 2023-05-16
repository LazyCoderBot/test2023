FROM node:18-alpine

COPY . /usr/src/server

WORKDIR /usr/src/server

RUN npm install

EXPOSE 8080

ENV NODE_ENV production

CMD ["npm", "run", "start"]