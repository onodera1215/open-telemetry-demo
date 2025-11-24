FROM node:24

WORKDIR /app


RUN apt-get update -y \
  && chown node:node /app \
  && npm i -g @nestjs/cli \
  && apt-get install -y xdg-utils \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY --chown=node:node . /app
RUN chmod u+x ./local_launch.sh
USER node

RUN npm ci \
  && npx prisma deploy \
  && npx prisma generate \
  && npm run build

CMD ["npm", "start"]