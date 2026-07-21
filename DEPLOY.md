# Deploy a VPS Neomac

Sitio final: https://rafael-holos.neomac.io

## Primer deploy (una sola vez)

Desde una máquina con SSH al VPS (`layel`, Hostinger console, etc.):

```bash
ssh root@100.86.123.81 "cd /opt && git clone https://github.com/glezrdg/rafael-holos.git rafael-holos && cd rafael-holos && docker compose -f docker-compose.prod.yml up -d --build"
```

## Redeploy tras un push

```bash
ssh root@100.86.123.81 "cd /opt/rafael-holos && git pull && docker compose -f docker-compose.prod.yml up -d --build"
```

## Logs

```bash
ssh root@100.86.123.81 "docker logs -f rafael-holos"
```

## Tumbar

```bash
ssh root@100.86.123.81 "cd /opt/rafael-holos && docker compose -f docker-compose.prod.yml down"
```
