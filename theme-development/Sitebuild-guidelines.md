# WordPress theme sitebuild in chronological order

### Stylesheet path

```
theme/─┬─style.css
       ├─index.php
       ├─page.php
       ├─font/
       └─img/
```

Subdirectory names in singular!

### Style meta headers

```css
/*!
Theme Name: _s
Author: _Author
Author URI: http://_author.tld/
Description: Company/Website/Year
Version: 1.0.0
License: _License
License URI: http://_License.URI/
Text Domain: _s
*/
```

### CSS cascading

Always start from body classes!

### Header/content splitting

Header end at main wrapper.

```html
</header>
<div id="content" class="site-content">
```

Content

```html
    <div id="primary" class="content-area">
        ...
    </div><!-- #primary -->
```

Footer starts with main wrapper end.

```html
</div><!-- #content -->
<footer>
    ...
```

### Basic SEO

1x H1 per page `class="site-title"`
1x H2 per page
avoid H1 and H2 in editable content
IMG should have an `alt` attribute

### Hardcoded classes

.alignleft
.wp-caption
?.gallery
.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley

### Featured image

Featured image should be an `<img/>` (not a background image)

### ALL CAPITALS

Please use `text-transform: uppercase;`

### Editable content

Keep the editable content class-free for TinyMCE. Thanks!

### Editor style

Limited style for basic HTML elements and shortcodes.

### Sass parameters

Development

```bash
sass --style expanded --line-numbers style.scss style.css
```

Production

```bash
sass --style compressed --sourcemap=none style.scss style.css
```

### CSS order

`wget -qO- https://html.spec.whatwg.org/multipage/ | grep '<span class=secno>4\.[0-9]*</span>[^<]*' -o`

- 4.1 The document element
- 4.2 Document metadata
- 4.3 Sections
- 4.4 Grouping content
- 4.5 Text-level semantics
- 4.6 Links
- 4.7 Edits
- 4.8 Embedded content
- 4.9 Tabular data
- 4.10 Forms
- 4.11 Interactive elements
- 4.12 Scripting
- 4.13 Custom elements
- (4.14 Common idioms without dedicated elements)
- (4.15 Disabled elements)
- (4.16 Matching HTML elements using selectors and CSS)
