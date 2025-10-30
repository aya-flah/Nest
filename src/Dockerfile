ROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3005

ENV NODE_ENV=production

CMD ["node", "dist/main"]
