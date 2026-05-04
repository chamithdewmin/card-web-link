# Dokploy: set build context to the `frontend` folder (this directory).
#   docker build -t card-web-link ./frontend
#
# Optional base path (default /weblink/ for logozodev.com/weblink):
#   docker build --build-arg VITE_BASE=/weblink/ -t card-web-link ./frontend

FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_BASE=/weblink/
ENV VITE_BASE=$VITE_BASE

COPY package.json package-lock.json* ./
RUN npm ci

COPY index.html vite.config.js tailwind.config.js postcss.config.js ./
COPY public ./public
COPY src ./src

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/weblink

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
