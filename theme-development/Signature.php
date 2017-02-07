<?php

add_action( 'wp_footer', 'szv_signature', 9999 );
function szv_signature() {
    echo "\n<!-- Setup & Maintenance: Viktor Szépe <viktor@szepe.net> -->\n";
}
