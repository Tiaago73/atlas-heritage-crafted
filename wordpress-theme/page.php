<?php get_header(); ?>

<main class="section">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="section-heading">
                    <h1><?php the_title(); ?></h1>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div style="margin-bottom: 2rem; text-align: center;">
                        <?php the_post_thumbnail('hero-image', array('style' => 'max-width: 100%; height: auto; border-radius: var(--radius);')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content" style="max-width: 800px; margin: 0 auto;">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'atlas-patrimonial'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
            
            <?php
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>
