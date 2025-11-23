FROM node:24

WORKDIR /app


RUN apt-get update -y \
  && chown node:node /app \
  && npm i -g @nestjs/cli \
  && apt-get install -y xdg-utils \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

USER node

CMD ["sleep", "infinity"]