<?php

add_action( 'admin_enqueue_scripts', function ( $hook ) {
    if ( 'post.php' !== $hook ) return;

    $script = <<<'EOF'
jQuery(document).one("acf/fields/tab/show", function () {
    // Delay tab activation
    setTimeout(function () {
        // Hash: "#field-id=field_0000000000000"
        var hashParam = window.location.hash.substr(1).split("=");
        var tabButton;
        if (hashParam[0] === "field-id") {
            tabButton = document.querySelector(".acf-tab-group .acf-tab-button[data-key='" + hashParam[1] + "']");
            if (tabButton) {
                // Activate tab
                tabButton.click();
                // Scroll to tab
                setTimeout(function () {
                    window.scroll(0, jQuery(tabButton).offset().top - 32);
                }, 0);
            }
        }
    }, 0);
});
EOF;

    wp_add_inline_script( 'jquery-core', $script );
} );
