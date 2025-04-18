# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app

COPY . .
RUN npm install && npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 80
CMD ["node_modules/.bin/next", "start"]
