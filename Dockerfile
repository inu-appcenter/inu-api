FROM node:14

WORKDIR /opt/inu-api

COPY . .

RUN npm ci

CMD ["npm", "start"]
