FROM node:18-alpine
WORKDIR /app

COPY package.json ./
RUN ls -al
RUN yarn install
COPY . ./
RUN yarn build

EXPOSE 3013
CMD ["yarn", "start"]


