app=$(grep name package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g')
rsync --rsh=ssh -av server.js root@188.226.163.24:/var/www/html/musico
rsync --rsh=ssh -av dist root@188.226.163.24:/var/www/html/musico
