# PRECISE METHOD - VPS Deployment Guide

## Prerequisites

- Hostinger VPS with Ubuntu 22.04 or later
- Node.js 20+ installed
- PostgreSQL 15+ installed (or use Docker)
- Nginx installed
- Domain pointed to your VPS IP

---

## Option 1: Docker Deployment (Recommended)

### 1. Install Docker on your VPS

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### 2. Clone and configure

```bash
# Upload project files to your VPS
cd /var/www/precisemethod

# Create environment file
cp .env.example .env
nano .env  # Edit with your secure passwords
```

### 3. Deploy with Docker Compose

```bash
docker-compose up -d --build
```

### 4. Set up SSL with Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d precisemethod.pro -d www.precisemethod.pro
```

---

## Option 2: Manual Deployment

### 1. Install Node.js 20

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Install PostgreSQL

```bash
sudo apt install postgresql postgresql-contrib
sudo -u postgres createuser precisemethod
sudo -u postgres createdb precisemethod -O precisemethod
sudo -u postgres psql -c "ALTER USER precisemethod PASSWORD 'YOUR_SECURE_PASSWORD';"
```

### 3. Upload and build the project

```bash
cd /var/www/precisemethod
npm ci
npm run build
```

### 4. Set environment variables

```bash
export NODE_ENV=production
export DATABASE_URL="postgresql://precisemethod:YOUR_PASSWORD@localhost:5432/precisemethod"
```

### 5. Run database migrations

```bash
npm run db:push
```

### 6. Set up PM2 for process management

```bash
sudo npm install -g pm2
pm2 start dist/index.cjs --name precisemethod
pm2 save
pm2 startup
```

### 7. Configure Nginx

```bash
sudo cp nginx.conf /etc/nginx/sites-available/precisemethod
sudo ln -s /etc/nginx/sites-available/precisemethod /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 8. Set up SSL

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d precisemethod.pro -d www.precisemethod.pro
```

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |

---

## Maintenance Commands

```bash
# View logs (PM2)
pm2 logs precisemethod

# Restart application
pm2 restart precisemethod

# Update application
git pull
npm ci
npm run build
pm2 restart precisemethod

# View logs (Docker)
docker-compose logs -f app
```

---

## Security Checklist

- [ ] Strong PostgreSQL password set
- [ ] Firewall configured (ports 22, 80, 443 only)
- [ ] SSL certificate installed
- [ ] Regular backups configured
- [ ] Fail2ban installed for SSH protection

---

## Support

For issues with the website, contact the development team.
For hosting issues, contact Hostinger support.
