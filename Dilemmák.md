## "Pozitív jövőképpel kódoljunk, ne gányolással startoljunk"

Szövegszerkesztő beállítások

- UTF-8 kódolás BOM nélkül ✓
- Linux-os sorvégek ✓
- Igazítás 4 szóközzel ✓
- Sorvégi szóközök törlése ✓

## WordPress HTML struktúrák

A [WordPress HTML](/WordPress-HTML.html) fájlban kommentként.

- language_attributes()
- bloginfo( 'charset' )
- body_class()
- wp_nav_menu()
- post_class()
- posted_on()
- dynamic_sidebar() + szöveges widget
- the_post_thumbnail() @TODO -> WordPress HTML.html
- @TODO comment

## WordPress CSS class-ok

- .align*
- .wp-caption.*
- img.wp-smiley
- @TODO

## Bootstrap dokumentáció követése

http://getbootstrap.com/css/

## Class használat

### Régi stílusú

Minden tulajdonság egy class-ban.

```html
<div class="row widges-search">
```

```css
.widges-search {
    padding-bottom: 30px;
    border-bottom: 2px #e4e4e4 dotted;
}
```

### Bootstrap ✓

Egy tulajdonság per class.
http://v4-alpha.getbootstrap.com/components/utilities/#spacing

- Moduláris ✓
- Olvasható ✓

```html
<div class="row pad-b-2 border-b-sep">
```

```css
.pad-b-3 {
    padding-bottom: 30px;
}
.border-b-sep {
    border-bottom: 2px #e4e4e4 dotted;
}
```

## LESS használat

Használatos fícsörök

- CSS szabályok egymásba ágyazása ✓
- Színek változókba rakása ✓
- Prefix-ek ✓

http://lesscss.org/features/

## Bootstrap komponens szelektálás

### LESS fájlokban ✓

Kikommentezés: `/less/bootstrap.less`

### Webes konfigurálással

http://getbootstrap.com/customize/
