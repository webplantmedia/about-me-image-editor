#!/bin/sh

echo =============== Setting up build environment ===============

echo - Cleaning up previous builds

rm -rf ../deploy/*.*

echo - Compressing prerequisite libraries
cat prerequisites.filelist | xargs cat >> ../deploy/prerequisites.js

echo - Compressing editor library
cat editor.filelist | xargs cat >> ../deploy/editor.js

echo - Compiling prerequisite libraries
java -jar google-closure-compiler.jar --js=../deploy/prerequisites.js --js_output_file=../deploy/prerequisites.min.js > ../logs/prerequisites.build.log

echo - Compiling editor library
java -jar google-closure-compiler.jar --js=../deploy/editor.js --js_output_file=../deploy/editor.min.js > ../logs/editor.build.log

echo - Deploying web worker threads
cp -R ../src/js/threads ../deploy

echo - Generating documentation
rm -rf ../docs/*.*
java -jar jsdoc\jsrun.jar jsdoc\app\run.js ^
-p -r -q -d=..\docs ^
-t=jsdoc\templates\outline ^
..\src\js\ > ../logs/docs.log

echo =============== Done ====================================