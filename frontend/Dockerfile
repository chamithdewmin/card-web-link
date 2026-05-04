# Same image as repo-root Dockerfile — use when Dokploy "Dockerfile path" is `frontend/Dockerfile`.
#
# Build context MUST still be the repository root (where package.json lives), e.g.:
#   docker build -f frontend/Dockerfile -t card-web-link .
#
# In Dokploy: set Application / Build "Root" or context to the repo root, NOT the `frontend` folder only.

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
