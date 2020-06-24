FROM node:10-slim

USER node

RUN mkdir -p /home/node/ServiceA

WORKDIR /home/node/ServiceA

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "." ]
