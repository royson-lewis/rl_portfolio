FROM node:18-alpine

WORKDIR /usr/src/app

# dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# bundle app src
COPY . .

EXPOSE 9000
CMD ["yarn", "start"]
