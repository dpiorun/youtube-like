FROM node:16

COPY ./package.json ./package-lock.json ./tsconfig.json /app/
WORKDIR /app
RUN npm install
COPY ./src /app/src
COPY ./public /app/public

CMD npm start
