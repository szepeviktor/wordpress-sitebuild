# Content editing

### Paragraphs of plain text

*sample editor-style.css

1. Purpose
1. How to enter
1. How NOT to enter
1. How it is displayed + Screenshot

Use the WordPress editor as your favourite editor (e.g. Microsoft Word, Pages for Mac).
Enter one paragraph in one paragraph without pressing <kbd>Enter</kdb>. Paragraph end are denoted by a "Return Symbol".

A paragraph on the frontend *should* have some bottom margin. Make sure your theme implements that.
If you don't have bottom margin, please do not use line breaks or empty paragraphs.
Ask your theme developer to implement that.

Please avoid line breaks (<kdb>Shift + Enter</kdb>). Line breaks break your content!

### Rich text

bold, italic ....
Colored text -> styles, shortcodes, disable button
align
--more-- between paragraphs
hr
sp chars

helyesírás!



### Links

links over several styles
nem ITT

### Copy&paste content

- Clear formatting
- Paste as text

### Import content

Next time consider entering the content in the WordPress editor

- From Word
- From other websites (Project Naptha) invisible elements (div) break your website
- From PDF files (text, text as image->OCR)

https://github.com/szepeviktor/debian-server-tools/blob/master/image/Upload-image.md

### Headings

- :
- -
- 1.
- I.
- .
?
!

If you would like *to give a title* (called subheaders) to paragraphs use Heading3 (H3).

! [Toolbar Toggle + Headings drop-down menu](screenshot)

Please aviod **bold text** in headers. They will look ugly or unpredictable on the frontend.

Header1 and Header2 should not be entered as content. Your theme should use these in the appropriate places.

Header4 may be used for sub-subheaders.

Header5 and Header6 are rarely used.

### Code

mm grid bg

### Lists

There are two types of lists: bulleted (unordered) list and numbered list.

### Quotes

Blockquotes will show a dotted line at the left.
? +ki mondta

### Table

TODO

### Media (images)

Linked images appears with a lightblue border.
editor-style.css marks missing images
img::after {
    content: " (broken image) ";
    display: inline-block;
    vertical-align: top;
    min-width: 50px;
    line-height: 50px;
    text-align: center;
    color: red;
    font-size: 1em;
}

http://www.sosmath.com/tables/factor/factor4.html

### Embedded (remote) content

Youtube video `[youtube id="ABCD1234"]` Shortcake

Prezi `[prezi id="abcd1234"]` Shortcake

### Custom content

add class with Styles dropdown: accent colored text
e.g. accent color

### Flow of editing

undo, redo, revisions
