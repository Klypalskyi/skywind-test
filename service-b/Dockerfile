FROM node:10-slim

USER node

RUN mkdir -p /home/node/ServiceB

WORKDIR /home/node/ServiceB

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

RUN npm run build

EXPOSE 50051

CMD ["node", "."]