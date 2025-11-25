FROM node:24

WORKDIR /app

RUN apt-get update -y 

COPY --chown=node:node . /app

USER node

CMD ["sleep", "infinity"]