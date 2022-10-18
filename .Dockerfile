FROM node:16

COPY ./package.json ./package-lock.json ./tsconfig.json .
WORKDIR .
RUN npm install
COPY ./src /src
COPY ./public /public

CMD npm start
