#!/bin/bash
### set -x #echo on

npm run build

cd ../mycordova/

cordova build

cd ../mytestapp

cp -R ./dist/mytestapp/* ../mycordova/platforms/android/app/src/main/assets/www



