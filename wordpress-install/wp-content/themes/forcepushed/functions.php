<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('wp_head', 'workbook_add_js');

function workbook_add_js() {
  wp_enqueue_script(
    'workbook_js_bundle',
    get_template_directory_uri() . '/js/bundle.js',
    array(),
    '1.0.0',
    true
  );
}
