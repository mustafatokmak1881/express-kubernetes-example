FROM node:18.19.0-alpine
WORKDIR /app
COPY . .
RUN npm i && npm i -g typescript && tsc
CMD node .