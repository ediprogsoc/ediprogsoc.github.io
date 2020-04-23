# GitHub-Pages-Launch-Checklist

###### Misc Cleanup and Optimisation
- [X] Ensure you have a 404 page
- [ ] Replace all `index.html` links with `/` (url is `/` instead of `/index.html`)
- [ ] For all other links, remove the `.html` portion of the link (url is `/page` instead of `/page.html`)
- [ ] \(Optional) [Update favicons](https://favicon.io/)
- [ ] \(Optional) Update meta descriptions and titles
- [ ] \(Optional) [Convert gifs to autoplaying videos](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video)
- [ ] \(Optional) [Add Webp image compatibility](https://web.dev/serve-images-webp/)
- [ ] \(Optional) [Implement image lazy loading](https://github.com/ApoorvSaxena/lozad.js)
- [ ] \(Optional) [Optimise image sizes](https://imgbot.net/)

###### Github Pages
- [ ] Go to repo > settings > GitHub Pages to set up GitHub Pages.
- [ ] If you only want a github.io site go to settings and tick https. You're done!

###### HTML errors & vulnerabilities
- [ ] Use an [HTML Checker](https://validator.w3.org/nu/) to find and resolve any HTML warnings or errors
- [ ] Use Google Lighthouse to identify & update old dependencies with known vulnerabilities

###### Domain Provider
- [ ] Grab a domain
- [ ] \(Optional) Get a free .me domain via [GitHub Education](https://education.github.com/)
- [ ] Go to Github Pages settings and add the new custom domain

###### Option 1 - Domain Provider > GitHub Pages Hosting
- [ ] Go to domain provider DNS settings and...
- [ ] Add a record Type `A` Name `your domain` Content `192.30.252.153` (points towards Github Pages)
- [ ] Add a record Type `A` Name `your domain` Content `192.30.252.154` (points towards Github Pages)
- [ ] \(If non-existent) add a record Type `CNAME` Name `www` Content `your domain`

###### Option 2 - Domain Provider > Cloudflare Analytics/ Cacheing/ Minification etc > GitHub Pages Hosting
- [ ] Go to Cloudflare and add a new website (with your new domain)
- [ ] When asked, go back to domain provider and input the custom DNS `adelaide.ns.cloudflare.com` `chad.ns.cloudflare.com`
- [ ] Go back to Cloudflare and...
- [ ] Add a record Type `A` Name `your domain` Content `192.30.252.153` (points towards Github Pages)
- [ ] Add a record Type `A` Name `your domain` Content `192.30.252.154` (points towards Github Pages)
- [ ] \(If non-existent) add a record Type `CNAME` Name `www` Content `your domain`
- [ ] Go to SSL settings and set to Flexible (or full, if it works for you)

###### Sitemap & Robots.txt
- [ ] Use a [Sitemap Generator](https://www.xml-sitemaps.com/), edit output to remove any sites that you want hidden (404 page etc)
- [ ] Add to Github repo (top folder level)
- [ ] Add a robots.txt file with the following content `Sitemap: http://www.yourdomain/sitemap.xml`
- [ ] Go to [Google Search Console](https://search.google.com/u/0/search-console/welcome?hl=en&utm_source=wmx&utm_medium=deprecation-pane&utm_content=dashboard)
- [ ] Go to Cloudflare DNS or domain provider DNS, add a record Type `TXT` Name `your domain` Content `verification string`
- [ ] Once confirmed, input sitemap URL to console for Google Search bot indexing

###### Optional: MX Records and Email Forwarding
| Description | Email Forwarding | Email Sending |
| ------------- | ------------- | ------------- |
| Google Domain  | [Google](https://support.google.com/domains/answer/3251241?hl=en) | [Google](https://support.google.com/domains/answer/9437157) |
| Namecheap > Gmail  | [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding)<br>[Namecheap **PAID**](https://www.namecheap.com/hosting/email/)<br>[Improvmx](https://app.improvmx.com/)  | [Namecheap **PAID**](https://www.namecheap.com/hosting/email/)<br>[GSuite **PAID**](https://support.google.com/a/answer/87127?hl=en)<br>[Improvmx](https://improvmx.com/guides/send-emails-using-gmail/)<br>[Improvmx **PAID**](https://app.improvmx.com/) |
| Cloudflare > Gmail | [GSuite **PAID**](https://support.google.com/a/answer/7174013?hl=en)<br>[Improvmx](https://app.improvmx.com/) | [GSuite **PAID**](https://support.google.com/a/answer/7174013?hl=en)<br>[Improvmx](https://improvmx.com/guides/send-emails-using-gmail/)<br>[Improvmx **PAID**](https://app.improvmx.com/) |

###### You're Done!
- [ ] Crack open the champagne
