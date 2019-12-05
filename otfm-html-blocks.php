<?php

/*
  Plugin Name:    OtFm Html Blocks
  Description:    Simple html blocks for markup block editor
  Version:        1.0.0
  Author:         Otshelnik-Fm (Wladimir Druzhaev)
  Author URI:     https://otshelnik-fm.ru/?post_type=post-group&p=6058
 */

/*

  ╔═╗╔╦╗╔═╗╔╦╗
  ║ ║ ║ ╠╣ ║║║ https://otshelnik-fm.ru
  ╚═╝ ╩ ╚  ╩ ╩

 */


if ( ! defined( 'ABSPATH' ) )
    exit; // Game over


add_action( 'init', 'otfm_html_resource_load' );
function otfm_html_resource_load() {
    // регистрируем стиль
    wp_register_style(
        'otfm_html_style', plugins_url( 'assets/css/style.css', __FILE__ )
    );

    // путь до js
    $js_url      = plugins_url( 'assets/js/blocks.js', __FILE__ );
    // зависимости
    $dependences = [ 'wp-blocks', 'wp-element' ];
    // динамическая версия скрипта. Важно!
    $vers        = filemtime( plugin_dir_path( __FILE__ ) . 'assets/js/blocks.js' );

    // регистрируем скрипт
    wp_register_script( 'otfm_html_script', $js_url, $dependences, $vers );

    // не WordPress 5.0
    if ( ! function_exists( 'register_block_type' ) )
        return;

    // регистрируем блок
    register_block_type( 'otfm-html/blocks', array(
        'editor_script' => 'otfm_html_script', // подключаем скрипт в админке
        'editor_style'  => 'otfm_html_style', // подключаем стиль в админке
        'style'         => 'otfm_html_style' // подключаем стиль в фронтенде
    ) );
}
