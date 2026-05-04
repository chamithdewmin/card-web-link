# Card-Web-Link — Vite + React static frontend
#
# Build from the repository root (parent of this folder):
#   docker build -f frontend/Dockerfile -t card-web-link .
#
# Run:
#   docker run --rm -p 8080:80 card-web-link
#   → http://localhost:8080

FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY index.html vite.config.js tailwind.config.js postcss.config.js ./
COPY public ./public
COPY src ./src

RUN npm run build

FROM nginx:1.27-alpine

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
