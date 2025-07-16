# build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
# npm packages install with peer-deps
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build

# runtime stage
FROM node:22-alpine
WORKDIR /app  
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
EXPOSE 1124

# Env values
ENV NODE_ENV=dev
ENV PORT=1124
ENV DATABASE_URL=mongodb+srv://filessend109:mongodb@cluster0.bf4zl3m.mongodb.net
ENV DB=exp-dk

RUN npm i --omit=dev --legacy-peer-deps

CMD ["node", "dist/app.js"]