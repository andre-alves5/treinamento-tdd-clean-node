FROM node:12-alpine
WORKDIR /usr/src/tdd-clean-node-api
COPY ./package.json .
RUN npm install --only=prod