# WordPress translation

### Translating Plugins and Themes

https://codex.wordpress.org/I18n_for_WordPress_Developers#Using_the_i18n_tools

```bash
svn co http://develop.svn.wordpress.org/trunk/tools/
wp core download --path=src
# makepot.sh

#!/bin/bash

set -e

# WordPress core and theme in /src
# Translation tools in /tools
cd POT-GENERATOR-DIR

# Change to theme's directory
cd src/wp-content/themes/THEME/
# Generate .pot file
php ../../../../tools/i18n/makepot.php wp-theme . languages/LANGUAGE-DOMAIN.pot
```

### Wrap hardcoded strings in localization function

`.cedit.menu`

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

Test: `ls *.php | xargs -n 1 php -l`
