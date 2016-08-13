# Custom Post Types

### GUI for `register_post_type()` by Pods

- In pods/includes/general.php:197 change `var_dump()` to `var_export()`
- Add `?pods_debug_register=1`
- Copy arguments into `register_post_type( 'cpt', $args )`
