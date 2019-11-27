<?php

/**
 * Add or append to a string element of an array or an object.
 *
 * $object object|array The array or object
 * $element mixed       The key
 * $value string        The value to append
 *
 * @return mixed        The object with value appended
 */
function append_to( &$object, $element, $value ) {

    switch ( gettype( $object ) ) {
        case 'array':
            if ( isset( $object[ $element ] ) ) {
                $object[ $element ] .= $value;
            } else {
                $object[ $element ] = $value;
            }
            break;
        case 'object':
            if ( isset( $object->$element ) ) {
                $object->$element .= $value;
            } else {
                $object->$element = $value;
            }
            break;
    }

    return $object;
}

$array = [ 'key' => 'value' ];
append_to( $array, 'key', '--appendTHIS' );
var_dump( $array );

$array = [ 'key' => 'value' ];
append_to( $array, 'newkey', '--appendTHIS' );
var_dump( $array );

$object = (object) [ 'key' => 'value' ];
append_to( $object, 'key', '--appendTHIS' );
var_dump( $object );

/*

array(1) {
  ["key"]=>
  string(17) "value--appendTHIS"
}
array(2) {
  ["key"]=>
  string(5) "value"
  ["newkey"]=>
  string(12) "--appendTHIS"
}
object(stdClass)#1 (1) {
  ["key"]=>
  string(17) "value--appendTHIS"
}

*/
