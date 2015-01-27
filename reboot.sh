#!/bin/sh
export PATH=/usr/local/bin:$PATH
forever start --sourceDir /var/www/darve app.js port=80 >> /darvelog.txt 2>&1

