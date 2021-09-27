FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=1234

EXPOSE 123

CMD [ "npm", "start" ]