# Deployment

This folder is a static GitHub Pages site. It can be published directly from the repository root.

## Required information

1. GitHub username, for example `yuzhang`.
2. Repository name:
   - User site: `<username>.github.io`, published at `https://<username>.github.io/`.
   - Project site: any repository name, published at `https://<username>.github.io/<repo>/`.
3. Optional custom domain, for example `yuzhang.net` or `www.yuzhang.net`.

## Deploy with the helper script

```bash
cd "personal-homepage"
./deploy-github-pages.sh <github-username> <repo-name> [custom-domain]
```

Examples:

```bash
./deploy-github-pages.sh yuzhang yuzhang.github.io
./deploy-github-pages.sh yuzhang personal-homepage
./deploy-github-pages.sh yuzhang yuzhang.github.io www.yuzhang.net
```

The script updates `sitemap.xml`, `robots.txt`, and `CNAME` when needed, then commits and pushes the site.
