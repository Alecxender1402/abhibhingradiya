# Build stage
FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:18-slim

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
