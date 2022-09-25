FROM node:18
RUN apt-get update && apt upgrade -y && apt install -y build-essential libpng-dev wget pkg-config libglib2.0-dev libexpat1-dev autoconf nasm libtool dpkg g++ git
RUN wget https://github.com/libvips/libvips/releases/download/v8.12.2/vips-8.12.2.tar.gz
RUN tar xf vips-8.12.2.tar.gz && cd vips-8.12.2 && ./configure && make && make install && ldconfig
RUN npm i -g npm@latest
RUN npm install pm2 -g
