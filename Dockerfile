FROM dk.jingli365.com/jl-node:v2
MAINTAINER Ke Peng <ke.peng@jingli365.com>
CMD node main.js



FROM dk.jingli365.com/jl-run:v2
MAINTAINER Ke Peng <ke.peng@jingli365.com>
COPY package.json /opt/app/
RUN cd /opt/app && rm -rf node_modules && npm install && rm -rf ~/.npm
COPY dist/ /opt/app/
WORKDIR /opt/app
CMD node main.js