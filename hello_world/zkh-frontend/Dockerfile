FROM node:19.8-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.17.1-alpine
COPY ./nginx.conf.template /nginx.conf.template
COPY --from=build /usr/src/app/dist/zkh-frontend /usr/share/nginx/html
#COPY src/assets/app-config.json /app-config.json //envsubst < /app-config.json > /usr/share/nginx/html/assets/app-config.json &&
CMD ["/bin/sh" , "-c" ," envsubst < /nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]
