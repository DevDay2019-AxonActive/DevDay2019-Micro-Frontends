FROM alpine:latest
RUN apk add --update nginx && rm -rf /var/cache/apk/

COPY config/nginx.conf /etc/nginx/nginx.conf
ADD build/ /usr/share/nginx/html/

EXPOSE 9092
CMD ["nginx", "-g", "daemon off;"]
