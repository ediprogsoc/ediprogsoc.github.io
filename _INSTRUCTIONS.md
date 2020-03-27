# How to Launch Site

###### Misc Cleanup
- [X] Make sure you have a 404 page
- [ ] Replace all `index.html` links with `/` (works on Github Pages)
- [ ] For all other links, remove the `.html` portion of the link
- [ ] \(Optional) Change favicons
- [ ] \(Optional) Change meta descriptions and titles
- [ ] \(Optional) Reduce image sizes & convert gifs to autoplaying videos (for performance)

###### Github Pages
- [ ] Go to repo > settings > Github Pages to setup temporary page with no custom domain

###### HTML errors
- [ ] Use an [HTML Checker](https://validator.w3.org/nu/) to find and resolve any HTML warnings or errors

###### Domain Provider via Namecheap
- [ ] Grab a domain!
- [ ] Go to Github Pages settings and add the new custom domain
- [ ] \(Optional) Get a free .me domain via [GitHub Education](https://education.github.com/)
- [ ] Don't touch DNS settings yet, and move on to the next section

###### SSL via Cloudflare
- [ ] Add a new website (with your new domain)
- [ ] When asked, go back to to Namecheap and input the two custom DNS `adelaide.ns.cloudflare.com` `chad.ns.cloudflare.com`
- [ ] Wait an eternity for Cloudflare to acknowledge it
- [ ] Go to Cloudflare DNS settings and...
- [ ] add a record Type `A` Name `your domain` Content `192.30.252.153` (points towards Github Pages)
- [ ] add a record Type `A` Name `your domain` Content `192.30.252.154` (points towards Github Pages)
- [ ] \(If non-existent) add a record Type `CNAME` Name `www` Content `your domain`
- [ ] \(If non-existent) add a record Type `TXT` Name `your domain` Content `v=spf1 include:spf.efwd.registrar-servers.com ~all`
- [ ] \(Optional) set up MX records for email forwarding
- [ ] Go to SSL settings and set to Flexible (limitation of Github Pages, can't do full encryption)

###### Sitemap & Robots.txt
- [ ] Use a [Sitemap Generator](https://www.xml-sitemaps.com/), edit output to remove any sites that you want hidden (404 page etc)
- [ ] Add to Github repo (top folder level)
- [ ] Add a robots.txt file with the following content `Sitemap: http://www.yourdomain/sitemap.xml`
- [ ] Go to [Google Search Console](https://search.google.com/u/0/search-console/welcome?hl=en&utm_source=wmx&utm_medium=deprecation-pane&utm_content=dashboard)
- [ ] Copy the verification string, go to Cloudflare DNS, add a record Type `TXT` Name `your domain` Content `verification string`
- [ ] Once confirmed, input sitemap url to console for Google Search bot indexing

###### You're Done!
- [ ] crack open the champagne
