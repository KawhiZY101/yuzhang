#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 2 ] || [ "$#" -gt 3 ]; then
  echo "Usage: ./deploy-github-pages.sh <github-username> <repo-name> [custom-domain]"
  exit 1
fi

owner="$1"
repo="$2"
custom_domain="${3:-}"

if [ -n "$custom_domain" ]; then
  public_url="https://${custom_domain}"
  printf "%s\n" "$custom_domain" > CNAME
elif [ "$repo" = "${owner}.github.io" ]; then
  public_url="https://${owner}.github.io"
  rm -f CNAME
else
  public_url="https://${owner}.github.io/${repo}"
  rm -f CNAME
fi

cat > sitemap.xml <<XML
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${public_url}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
XML

cat > robots.txt <<TXT
User-agent: *
Allow: /

Sitemap: ${public_url}/sitemap.xml
TXT

if [ ! -d .git ]; then
  git init
fi

git add .
git commit -m "Deploy personal homepage" || true

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "https://github.com/${owner}/${repo}.git"
else
  git remote add origin "https://github.com/${owner}/${repo}.git"
fi

git branch -M main
git push -u origin main

echo "Published source pushed. Enable GitHub Pages from the main branch / root folder."
echo "Expected URL: ${public_url}/"
