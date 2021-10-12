FROM node:14.16.0

WORKDIR /app

ENV ENVIRONMENT=DEVELOPMENT

COPY ./package.json /app

RUN npm install

COPY . /app

EXPOSE 3000