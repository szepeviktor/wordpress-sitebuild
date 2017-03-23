<?php

add_filter( 'option_category_base', 'wpml_category_slug' );
function wpml_category_slug() {

    global $sitepress;
    $lang = $sitepress->get_current_language();
    //$lang = ICL_LANGUAGE_CODE; // Without filter

    switch ( $lang ) {
        case 'en':
            $pref = 'rubrique';
            break;
        case 'de';
            $pref = 'section';
            break;
        case 'it';
            $pref = 'section';
            break;
        default: // hu
            $pref = 'kategoria';
    }

    return $pref;
}
