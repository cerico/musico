![screenshot](https://s3.eu-west-2.amazonaws.com/io1937/musicali/player.jpeg)

## Setup

Should run with all modern versions of node. 

```
➜  musico git:(master) node -v
v8.9.1
➜  musico git:(master) npm -v
5.5.1
```

## Start
```
➜  musico git:(master) npm run dev
```

browse to http://localhost:3404

## Build / Serve production
```
➜  musico git:(master) npm run build
➜  musico git:(master) npm run start
```

## Deploy

```
➜  musico git:(master) npm run deploy
```

browse to http://musico.malham.io/

Hosted at Digital Ocean (Centos 6.5)

Served with Nginx and Pm2

## TODO 

* [ ] Make a Progress Bar
* [√] Production Build
* [√] Deploy

