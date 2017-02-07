<?php

/**
 * Customize Login Logo
 */

// EDIT: image path and size

function _s_login_logo() {

?>
    <style type="text/css">
        .login h1 a {
            width: 145px !important;
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.png) !important;
            background-size: 145px !important;
            background-repeat: no-repeat;
        }
    </style>
<?php
}

function _s_login_logo_url() {

    return home_url();
}

function _s_login_logo_url_title() {

    return get_bloginfo( 'name' );
}

add_action( 'login_enqueue_scripts', '_s_login_logo' );
add_filter( 'login_headerurl', '_s_login_logo_url' );
add_filter( 'login_headertitle', '_s_login_logo_url_title' );
