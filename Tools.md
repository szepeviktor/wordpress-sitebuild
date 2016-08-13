### Codeinwp tools

- http://styletil.es/
- http://pixeldropr.com/
- https://icomoon.io/
- https://addons.mozilla.org/en-US/firefox/addon/font-finder/
- https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm
- https://unsplash.com/
- https://color.hailpixel.com/
- http://getbootstrap.com/
- https://jetstrap.com/
- https://placeit.net/
- http://fontawesome.io/

### Bootstrap design

Grid builder: http://shoelace.io/

- http://mianfolio.com/ultimateblocks/
- http://bootstrapstarterkit.com/bskit-demo/
- https://bootstrapstudio.io/
- http://www.layoutit.com/
- http://brix.io/

### In-browser cloud development

- https://www.nitrous.io/
- https://www.sourcelair.com/
- https://c9.io/

### Changelog as a service

https://headwayapp.co/

### Watch PHP-FPM log

```bash
tail -f /var/log/apache2/${USER}-ssl-error.log|sed 's;\\n;\n●;g'

# Convert all escaped characters
tail -f /var/log/apache2/${USER}-ssl-error.log|xargs -L 1 echo -e
```

### Dump to error.log

`error_log('->'.serialize(  ));`

