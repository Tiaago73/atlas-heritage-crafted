<?php
/**
 * Atlas Patrimonial Theme Functions
 */

// Theme Setup
function atlas_patrimonial_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'atlas-patrimonial'),
        'footer' => __('Footer Menu', 'atlas-patrimonial')
    ));
    
    // Add image sizes
    add_image_size('hero-image', 1920, 1080, true);
    add_image_size('card-image', 600, 400, true);
}
add_action('after_setup_theme', 'atlas_patrimonial_setup');

// Enqueue scripts and styles
function atlas_patrimonial_scripts() {
    wp_enqueue_style('atlas-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('atlas-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'atlas_patrimonial_scripts');

// Register widget areas
function atlas_patrimonial_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area 1', 'atlas-patrimonial'),
        'id' => 'footer-1',
        'description' => __('Appears in the footer', 'atlas-patrimonial'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget Area 2', 'atlas-patrimonial'),
        'id' => 'footer-2',
        'description' => __('Appears in the footer', 'atlas-patrimonial'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget Area 3', 'atlas-patrimonial'),
        'id' => 'footer-3',
        'description' => __('Appears in the footer', 'atlas-patrimonial'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'atlas_patrimonial_widgets_init');

// Custom Post Types
function atlas_patrimonial_custom_post_types() {
    // Cases Post Type
    register_post_type('case_study', array(
        'labels' => array(
            'name' => __('Cases', 'atlas-patrimonial'),
            'singular_name' => __('Case', 'atlas-patrimonial'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
        'rewrite' => array('slug' => 'cases'),
    ));
    
    // Testimonials Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Depoimentos', 'atlas-patrimonial'),
            'singular_name' => __('Depoimento', 'atlas-patrimonial'),
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-testimonial',
    ));
}
add_action('init', 'atlas_patrimonial_custom_post_types');

// Add custom fields for cases
function atlas_patrimonial_case_meta_boxes() {
    add_meta_box(
        'case_details',
        'Detalhes do Case',
        'atlas_patrimonial_case_details_callback',
        'case_study',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'atlas_patrimonial_case_meta_boxes');

function atlas_patrimonial_case_details_callback($post) {
    wp_nonce_field('atlas_case_details', 'atlas_case_details_nonce');
    
    $location = get_post_meta($post->ID, '_case_location', true);
    $price = get_post_meta($post->ID, '_case_price', true);
    $roi = get_post_meta($post->ID, '_case_roi', true);
    $area = get_post_meta($post->ID, '_case_area', true);
    
    echo '<p><label>Localização: <input type="text" name="case_location" value="' . esc_attr($location) . '" style="width:100%"></label></p>';
    echo '<p><label>Preço: <input type="text" name="case_price" value="' . esc_attr($price) . '" style="width:100%"></label></p>';
    echo '<p><label>ROI: <input type="text" name="case_roi" value="' . esc_attr($roi) . '" style="width:100%"></label></p>';
    echo '<p><label>Área (m²): <input type="text" name="case_area" value="' . esc_attr($area) . '" style="width:100%"></label></p>';
}

function atlas_patrimonial_save_case_details($post_id) {
    if (!isset($_POST['atlas_case_details_nonce']) || !wp_verify_nonce($_POST['atlas_case_details_nonce'], 'atlas_case_details')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['case_location'])) {
        update_post_meta($post_id, '_case_location', sanitize_text_field($_POST['case_location']));
    }
    if (isset($_POST['case_price'])) {
        update_post_meta($post_id, '_case_price', sanitize_text_field($_POST['case_price']));
    }
    if (isset($_POST['case_roi'])) {
        update_post_meta($post_id, '_case_roi', sanitize_text_field($_POST['case_roi']));
    }
    if (isset($_POST['case_area'])) {
        update_post_meta($post_id, '_case_area', sanitize_text_field($_POST['case_area']));
    }
}
add_action('save_post', 'atlas_patrimonial_save_case_details');

// Customizer options
function atlas_patrimonial_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'atlas-patrimonial'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Gestão Patrimonial Inteligente',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'atlas-patrimonial'),
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Maximize o retorno do seu patrimônio imobiliário com estratégias personalizadas',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'atlas-patrimonial'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    $wp_customize->add_setting('hero_image', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image', array(
        'label' => __('Hero Background Image', 'atlas-patrimonial'),
        'section' => 'hero_section',
    )));
    
    // Contact Info
    $wp_customize->add_section('contact_info', array(
        'title' => __('Informações de Contato', 'atlas-patrimonial'),
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '(11) 98765-4321',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => __('Telefone', 'atlas-patrimonial'),
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'contato@atlaspatrimonial.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => __('Email', 'atlas-patrimonial'),
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default' => 'Av. Tambore, 267 - Tamboré, Barueri - SP, 06460-000',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => __('Endereço', 'atlas-patrimonial'),
        'section' => 'contact_info',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'atlas_patrimonial_customize_register');
