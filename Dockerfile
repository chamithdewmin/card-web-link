# Card-Web-Link — Vite + React (static) + Nginx
#
# IMPORTANT (Dokploy / Docker): build context MUST be the repository root
# (the folder that contains package.json, src/, public/, frontend/nginx.conf).
#
#   docker build -t card-web-link .
#
# Dokploy: leave "Root Directory" / build context empty or "." (repo root).
# Do NOT set root to only `frontend/` — COPY needs package.json at context root.
# Dockerfile path can be either `Dockerfile` or `frontend/Dockerfile` (same build).
#
# Run:
#   docker run --rm -p 8080:80 card-web-link
#
# Public URL path (must match Dokploy "Path", trailing slash required for Vite):
#   docker build --build-arg VITE_BASE=/weblink/ -t card-web-link .

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

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/weblink

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
