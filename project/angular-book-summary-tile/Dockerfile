FROM node:12.2.0
COPY . /app
WORKDIR /app
RUN npm install
RUN npm install -g http-server
CMD npm run publish
