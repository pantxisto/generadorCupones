FROM node:14.16.0

RUN apt-get update && apt-get install -y dos2unix

RUN npm install @angular/cli@12.2.0

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY ./ /app

RUN dos2unix ./wait-for-it.sh && apt-get --purge remove -y dos2unix && rm -rf /var/lib/apt/lists/*

RUN chmod +x ./wait-for-it.sh

EXPOSE 4200
