# Install dependencies
FROM docker.io/library/node:18.8.0-alpine3.16 AS dependencies
WORKDIR /src
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the static site
FROM docker.io/library/node:18.8.0-alpine3.16 AS build
ARG NODE_ENV_ARG=development
ARG DOCKER_ARG=false
WORKDIR /src
COPY --from=dependencies /src/node_modules ./node_modules
COPY . .
RUN NODE_ENV=${NODE_ENV_ARG} DOCKER=${DOCKER_ARG} yarn build

# Serve the static site
FROM docker.io/library/nginx:1.23.1-alpine
COPY --from=build /src/build /usr/share/nginx/html
RUN sed -i 's/    listen       80;/    listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080

# Set the metadata of the container image
# Reference: https://github.com/opencontainers/image-spec/blob/main/annotations.md
LABEL org.opencontainers.image.source="https://github.com/pbp-fasilkom-ui/ganjil-2023"
