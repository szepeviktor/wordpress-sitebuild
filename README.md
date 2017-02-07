# WordPress sitebuild snippets

### Website making steps

1. Graphic design (PSD)
1. HTML sitebuild
1. CMS template (WordPress theme)
1. Plugins
1. Content


@TODO

- http://www.dds.hu/
- http://truelite.hu/

### WordPress themes

- * https://creativemarket.com/themes/WordPress
- * http://themeisle.com/wordpress-themes/
- https://themeforest.net/category/wordpress
- http://www.templatemonster.com/wordpress-themes.php + depositphotos.com
- https://colorlib.com/wp/free-wordpress-themes/

### Development plugins

- `plugin-installer-speedup` plugin installation
- `airplane-mode` networking @GitHub

- könyvtárak nevei???
- pure css
- wp core outputs + disabling + styling
from _s:
    - content filter
    - emoji, emoji.AMD
    - thumbnail, attachments: responsive, cropping
    - _s outputs
    - body classes, solution from body classes
    - menu HTML, classes
    - post title, classes, link/no link
    - post meta, hAtom
    - widget, classes
- pure js
- jQuery
- AMD, ES6 modules

### Frameworks

- https://foundationpress.olefredrik.com/kitchen-sink
- https://skeleton-framework.github.io/
- https://github.com/wordplate/wordplate
- http://materializecss.com/about.html (HTML)

### Theme Options

- https://github.com/alleyinteractive/wordpress-fieldmanager
- https://github.com/voceconnect/voce-settings-api

### Generate snippets

https://generatewp.com/custom/

### Post thumbnail

```html
<!-- <?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'full' ); } ?> -->
<img width="700" height="674" src="http://keszul.tk/static/uploads/2014/08/portfolio-item-10.jpg"
    class="attachment-full wp-post-image" alt="portfolio-item-10" />
```

#### Thubmnail styling

```css
img.wp-post-image { }
img.attachment-thumbnail { }
img.attachment-medium { }
img.attachment-large { }
img.attachment-fu { }
```

## Development tools

- (keepass)/kód
- https://www.sourcelair.com/home
- http://brackets.io/ by Adobe
- https://www.nitrous.io/

### Demo images

- http://kepguru.hu/
- http://lorempixel.com/
- http://placehold.it/
- https://unsplash.com/

