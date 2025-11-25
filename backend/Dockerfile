FROM node:24

WORKDIR /app


RUN apt-get update -y \
  && chown node:node /app \
  && npm i -g @nestjs/cli \
  && apt-get install -y xdg-utils \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY --chown=node:node . /app
RUN chmod u+x ./launch.sh
USER node

CMD ["./launch.sh"]
