<?php

add_action( 'wp_dashboard_setup', 'prefix_dashboard_widget' );
function prefix_dashboard_widget() {
    wp_add_dashboard_widget(
        'prefix_dashboard_widget_id',
        'Title',
        'prefix_dashboard_widget_content'
    );
}
function prefix_dashboard_widget_content() {
    echo '<html>';
}
