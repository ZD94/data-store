FROM dk.l.jingli365.com/jl-node:v3
MAINTAINER Ke Peng <ke.peng@jingli365.com>
ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN
CMD node main.js