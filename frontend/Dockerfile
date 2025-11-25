FROM node:24

WORKDIR /app

RUN apt-get update -y 

COPY --chown=node:node . /app
RUN chmod u+x ./local_launch.sh

USER node
RUN npm ci \
  && npm run build 

CMD ["npm", "start"]