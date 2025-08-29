FROM oven/bun:1   
# because bun comes with a base node image

WORKDIR /usr/src/app

#we are copying multiple time to ingnore docekrignore
#we can do copy . . and then write  nodemodules in dockerignore.
# COPY ./packages ./packages
# COPY ./bun.lock ./bun.lock
# COPY  ./package*.json .
# COPY ./turbo.json ./turbo.json

# COPY ./apps/ws-backend ./apps/ws-backend

# RUN cd packages/db && npx prisma generate & cd ../..
# we can put this in scritps in ./package.json
COPY . .

RUN bun install
RUN bun run db:migrate

EXPOSE 8080

#we can not run this beause this'll run in root folder 
# and root does not have index.ts
# CMD ["bun","run","index.ts"]

# so we added a script in package,json

CMD ["bun","run","start:ws-backend"]