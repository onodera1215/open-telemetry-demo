FROM node:24

WORKDIR /app

RUN apt-get update -y \
  && mkdir -p /app/.next \
  && chown -R node:node /app/.next

COPY --chown=node:node . /app

USER node
RUN npm ci \
  && npm run build 

CMD ["npm", "start"]