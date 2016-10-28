# WordPress translation

### Translating Plugins and Themes

https://codex.wordpress.org/I18n_for_WordPress_Developers#Using_the_i18n_tools

```bash
svn co http://develop.svn.wordpress.org/trunk/tools/
wp core download --path=src
editor themepot.sh
chmod +x themepot.sh
```

Copy theme to `src/wp-content/themes/`

```bash
#!/bin/bash
#
# themepot.sh
#

THEME=<slug>
LANGUAGE_DOMAIN=<domain>

set -e

cd "$(dirname "$0")"
# WordPress core and theme in /src
# Translation tools in /tools

# Change to theme's directory
cd src/wp-content/themes/${THEME}/
# Generate .pot file
php ../../../../tools/i18n/makepot.php wp-theme . "languages/${LANGUAGE_DOMAIN}.pot"
echo "Result: $(realpath "languages/${LANGUAGE_DOMAIN}.pot")"
```

### Wrap hardcoded strings in localization function

MC's `.cedit.menu`

```
1       Wrap selection in esc_html_e()
        TMPFILE=$(mktemp ${MC_TMPDIR:-/tmp}/up.XXXXXX) || exit 1
        cat %b > $TMPFILE
        cat $TMPFILE | sed "s/\(.*\)/<?php esc_html_e( '\1', 'txtdom' ); ?>/" > %b
        rm -f $TMPFILE

2       Wrap selection in printf( esc_html__() )
        TMPFILE=$(mktemp ${MC_TMPDIR:-/tmp}/up.XXXXXX) || exit 1
        cat %b > $TMPFILE
        cat $TMPFILE | sed "s/\(.*\)/<?php printf( esc_html__( '\1', 'txtdom' ),  ); ?>/" > %b
        rm -f $TMPFILE
```

Syntax check: `ls *.php | xargs -n 1 php -l`
