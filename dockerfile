FROM node:18-alpine

WORKDIR /project/rl_portfolio

# dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# bundle app src
COPY . .

CMD ["yarn", "start"]
