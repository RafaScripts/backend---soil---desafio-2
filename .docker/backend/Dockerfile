FROM node:18

# workdir
WORKDIR /app

# copy package.json
COPY package.json .

# install dependencies
RUN npm install --global yarn

run yarn

# copy all files \
COPY .. .

# expose port
EXPOSE 3000

# start the app
CMD ["yarn", "start"]