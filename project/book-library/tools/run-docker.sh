IMAGE_NAME="$1"
CONTAINER="$2"
docker rm -f $CONTAINER && docker run --name=$CONTAINER --restart=on-failure:7 -d -t --net=host $IMAGE_NAME
