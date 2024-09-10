FROM node:latest

WORKDIR /app/frontend
COPY package.json ./

RUN npm install bun
RUN bun install
COPY . .

RUN bun run build

FROM node:latest

COPY --from=0 /app/frontend/.next ./.next
COPY --from=0 /app/frontend/node_modules ./node_modules
COPY --from=0 /app/frontend/package.json ./

ENV NODE_ENV production
CMD ["bun start"]
