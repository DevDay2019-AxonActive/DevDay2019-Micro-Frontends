FROM alpine:latest
RUN apk add --update nginx && rm -rf /var/cache/apk/

COPY config/nginx.conf /etc/nginx/nginx.conf
ADD dist/ /usr/share/nginx/html/

EXPOSE 9091
CMD ["nginx", "-g", "daemon off;"]
