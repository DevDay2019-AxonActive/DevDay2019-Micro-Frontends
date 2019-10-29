if [[ "$1" != "" ]]; then
    IMAGE_NAME="$1"
else
    IMAGE_NAME=book-library
fi

if [[ "$2" != "" ]]; then
    IMAGE_VERSION="$2"
else
    IMAGE_VERSION=1.0
fi

docker build --rm=true -t book-library/$IMAGE_NAME:$IMAGE_VERSION ../
