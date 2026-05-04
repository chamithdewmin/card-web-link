# Build from repository root (includes full repo context):
#   docker build -t card-web-link .
#
# Same image as frontend/Dockerfile, but copies from ./frontend (for CI that uses root context).

FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_BASE=/weblink/
ENV VITE_BASE=$VITE_BASE

COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci

COPY frontend/index.html frontend/vite.config.js frontend/tailwind.config.js frontend/postcss.config.js ./
COPY frontend/public ./public
COPY frontend/src ./src

RUN npm run build

FROM nginx:1.27-alpine

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/weblink

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
