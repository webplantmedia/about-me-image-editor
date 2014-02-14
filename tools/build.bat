@echo off

echo =============== Setting up build environment ===============

echo - Cleaning up previous builds

rm -rf ../deploy/*.*

echo - Compressing stylesheet
cat stylesheet.filelist | xargs cat >> ../deploy/style.css
java -jar yuicompressor-2.4.7.jar ../deploy/style.css -o ../deploy/style.min.css -v 2> ../logs/stylesheet.build.log


echo - Compressing prerequisite libraries
cat prerequisites.filelist | xargs cat >> ../deploy/prerequisites.js

echo - Compressing editor library
cat editor.filelist | xargs cat >> ../deploy/editor.js

echo - Compiling prerequisite libraries
java -jar google-closure-compiler.jar --js=../deploy/prerequisites.js --js_output_file=../deploy/prerequisites.min.js 2> ../logs/prerequisites.build.log

echo - Compiling editor library
java -jar google-closure-compiler.jar --js=../deploy/editor.js --js_output_file=../deploy/editor.min.js 2> ../logs/editor.build.log

echo - Deploying web worker threads
rem cp -R ../src/js/threads ../deploy

echo - Generating documentation
rem rm -rf ../docs/*.*
rem java -jar jsdoc\jsrun.jar jsdoc\app\run.js -p -r -q -d=..\docs -t=jsdoc\templates\outline ..\src\js\ 2> ../logs/docs.log

echo =============== Done ====================================