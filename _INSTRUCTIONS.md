# How to Launch Site

###### Misc Cleanup and Optimisation
- [X] Make sure you have a 404 page
- [ ] Replace all `index.html` links with `/` (works on Github Pages)
- [ ] For all other links, remove the `.html` portion of the link
- [ ] \(Optional) [Change favicons](https://favicon.io/)
- [ ] \(Optional) Change meta descriptions and titles
- [ ] \(Optional) [Convert gifs to autoplaying videos](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video)
- [ ] \(Optional) [Add Webp image compatibility](https://web.dev/serve-images-webp/)
- [ ] \(Optional) [Implement image lazy loading](https://github.com/ApoorvSaxena/lozad.js)
- [ ] \(Optional) [Optimise image sizes](https://imgbot.net/)

###### Github Pages
- [ ] Go to repo > settings > Github Pages to setup temporary page with no custom domain

###### HTML errors & vulnerabilities
- [ ] Use an [HTML Checker](https://validator.w3.org/nu/) to find and resolve any HTML warnings or errors
- [ ] Use Google Lighthouse to identify & update old dependencies with known vulnerabilities

###### Domain Provider via Namecheap
- [ ] Grab a domain!
- [ ] \(Optional) Get a free .me domain via [GitHub Education](https://education.github.com/)
- [ ] Go to Github Pages settings and add the new custom domain
- [ ] Don't touch DNS settings yet, and move on to the next section

###### ~SSL via Cloudflare~ Only use Cloudflare if you want auto minification/ caching etc, otherwise do this for Namecheap and tick https on GH pages
- [ ] ~Add a new website (with your new domain)~
- [ ] ~When asked, go back to to Namecheap and input the custom DNS `adelaide.ns.cloudflare.com` `chad.ns.cloudflare.com`~
- [ ] ~Wait an eternity for Cloudflare to acknowledge it~
- [ ] ~Go to Cloudflare DNS settings and...~
- [ ] add a record Type `A` Name `your domain` Content `192.30.252.153` (points towards Github Pages)
- [ ] add a record Type `A` Name `your domain` Content `192.30.252.154` (points towards Github Pages)
- [ ] \(If non-existent) add a record Type `CNAME` Name `www` Content `your domain`
- [ ] ~\(If non-existent) add a record Type `TXT` Name `your domain` Content `v=spf1 include:spf.efwd.registrar-servers.com ~all`~
- [ ] ~\(Optional) set up MX records for email forwarding~
- [ ] ~Go to SSL settings and set to Flexible (limitation of Github Pages, can't do full encryption)~

###### Sitemap & Robots.txt
- [ ] Use a [Sitemap Generator](https://www.xml-sitemaps.com/), edit output to remove any sites that you want hidden (404 page etc)
- [ ] Add to Github repo (top folder level)
- [ ] Add a robots.txt file with the following content `Sitemap: http://www.yourdomain/sitemap.xml`
- [ ] Go to [Google Search Console](https://search.google.com/u/0/search-console/welcome?hl=en&utm_source=wmx&utm_medium=deprecation-pane&utm_content=dashboard)
- [ ] Copy the verification string, go to Cloudflare DNS, add a record Type `TXT` Name `your domain` Content `verification string`
- [ ] Once confirmed, input sitemap url to console for Google Search bot indexing

###### You're Done!
- [ ] Crack open the champagne
