#!/bin/sh
# copy from the image backup location to the volume mount
cp -a /usr/src/portfolio/backup/node_modules/* /usr/src/portfolio/frontend/node_modules/
# this next line runs the docker command
exec "$@"
