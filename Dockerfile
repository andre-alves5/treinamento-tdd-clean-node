FROM node:12-alpine
WORKDIR /usr/src/TDD_CLEAN_NODE_API
COPY ./package.json .
RUN npm install --only=prod