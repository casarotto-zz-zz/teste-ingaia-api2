FROM node:14.15.4

WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn
RUN yarn build

EXPOSE 3002
CMD node build/index.js