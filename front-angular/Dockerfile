FROM node:lts-alpine
WORKDIR /usr/src/app
COPY front_angular/package*.json ./
RUN ls -l
RUN npm install
COPY front_angular ./
RUN ls -l
RUN npm run build
COPY front_angular/nodeServer.js dist/nodeServer.js
WORKDIR /usr/src/app/dist

CMD [ "node", "nodeServer.js" ]
