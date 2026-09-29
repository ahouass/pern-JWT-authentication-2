FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install nodemon

COPY . .

EXPOSE 3001

CMD ["npx", "nodemon", "--legacy-watch", "server.js"]