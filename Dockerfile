FROM node:11.10
MAINTAINER Petr Ermishkin <quasiyoke@gmail.com>

COPY assets/ /frontsexywebsite/assets/
COPY config/ /frontsexywebsite/config/
COPY src/ /frontsexywebsite/src/
COPY babel.config.js .eslintrc.js docker-entrypoint.sh package.json yarn.lock webpack.config.js /frontsexywebsite/

RUN cd /frontsexywebsite/ && \
  yarn && \
  yarn run build
CMD ["/frontsexywebsite/docker-entrypoint.sh"]
