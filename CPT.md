# Custom Post Types

### GUI for `register_post_type()` by Pods

- In pods/includes/general.php in `pods_debug()` change `var_dump( $debug )` to `var_export( $debug )`, and `$debug = '<e>' . $debug;` to `$debug = '<pre>' . $debug;`
- Visit `/wp-admin/admin.php?pods_debug_register=1`
- Copy arguments into `register_post_type( 'cpt', $args )`
