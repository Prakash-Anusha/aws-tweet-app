# FROM nginx:1.17.1-alpine
# COPY /dist/tweet-app-ui /usr/share/nginx/html


FROM node:latest as builder
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
CMD [ "npm", "start" ]