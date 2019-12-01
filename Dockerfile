FROM node:alpine

RUN mkdir /app
WORKDIR /app

# add package.json
ADD package.json /app

# install dependencies
RUN npm install

# add app
ADD app.js /app

# launch app
CMD ["node", "app"]