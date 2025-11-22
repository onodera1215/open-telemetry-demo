FROM node:24

WORKDIR /app


RUN apt-get update -y \
  && chown node:node /app \
  && npm i -g @nestjs/cli

USER node

CMD ["sleep", "infinity"]