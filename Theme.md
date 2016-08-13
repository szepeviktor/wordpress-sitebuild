## Preparations

### Decision on support levels

- browser support: mobile/legacy and testing, Do we have Analytics data?
- SEO page title/basic/advanced/Hire an expert
- languages, RTL?
- 3rd-party integrations: external data sources (API), analytics, video, live chat, mouse tracking


Validate HTML: https://validator.nu/

Watch error log: `tail -f /var/log/apache2/*-error.log | sed -e 's;\\n;\n●;g'`

### Signature

```php
add_action( 'wp_footer', 'szv_signature', 9999 );
function szv_signature() {
    echo '<!-- Setup & Maintenance: Viktor Szépe <viktor@szepe.net> -->' . "\n";
}
```
