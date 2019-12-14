FROM node:lts

RUN apt-get update

RUN apt-get install -yq --no-install-recommends ffmpeg

WORKDIR /usr/src/app/

ADD . /usr/src/app/

RUN npm install

CMD node server.js
