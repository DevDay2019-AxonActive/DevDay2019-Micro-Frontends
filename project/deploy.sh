#!/usr/bin/env bash
WORKING_DIR=web-gui
ANGULAR_BOOK_DIR=angular-book-summary-tile
REACT_BOOK_DIR=react-book-summary-tile
BOOK_LIBRARY_DIR=book-library

echo "Prepare Modules"
sh build.sh $ANGULAR_BOOK_DIR $REACT_BOOK_DIR $BOOK_LIBRARY_DIR

echo "Prepare archive"
if [ -d "$WORKING_DIR" ]; then rm -Rf $WORKING_DIR; fi
if [ -f "$WORKING_DIR.zip" ]; then rm -Rf $WORKING_DIR.zip; fi
mkdir $WORKING_DIR

echo Go to ${WORKING_DIR}
cd $WORKING_DIR


# Deploy Angular Book
echo "- Create ${ANGULAR_BOOK_DIR} folder"
mkdir $ANGULAR_BOOK_DIR
echo " - Coping assets"
cd $ANGULAR_BOOK_DIR
cp -rf ../../$ANGULAR_BOOK_DIR/config config
cp -rf ../../$ANGULAR_BOOK_DIR/dist dist
cp -rf ../../$ANGULAR_BOOK_DIR/Dockerfile Dockerfile
cd ..
echo " - Copy assets successfully"

# Deploy React Book
echo "- Create ${REACT_BOOK_DIR} folder"
mkdir $REACT_BOOK_DIR
echo " - Coping assets"
cd $REACT_BOOK_DIR

mkdir config
cp -rf ../../$REACT_BOOK_DIR/config/nginx.conf config/
cp -rf ../../$REACT_BOOK_DIR/build build
cp -rf ../../$REACT_BOOK_DIR/Dockerfile Dockerfile
cd ..
echo " - Copy assets successfully"

# Deploy Book Libra
echo "- Create ${BOOK_LIBRARY_DIR} folder"
mkdir $BOOK_LIBRARY_DIR
echo " - Coping assets"
cd $BOOK_LIBRARY_DIR

cp -rf ../../$BOOK_LIBRARY_DIR/config config
cp -rf ../../$BOOK_LIBRARY_DIR/dist dist
cp -rf ../../$BOOK_LIBRARY_DIR/Dockerfile Dockerfile
cd ..
echo " - Copy assets successfully"

cp ../docker-compose.yml docker-compose.yml

cd ..
zip -r $WORKING_DIR $WORKING_DIR

rm -Rf $WORKING_DIR

echo "Prepare archive success"