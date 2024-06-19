FROM node:20-alpine

ENV DATABASE_URL=postgresql://myuser:mypassword@postgres:5432/main?schema=public

WORKDIR app

COPY package.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]