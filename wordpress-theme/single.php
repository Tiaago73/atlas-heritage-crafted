<?php get_header(); ?>

<main class="section">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="section-heading">
                    <h1><?php the_title(); ?></h1>
                    <div style="display: flex; gap: 1rem; justify-content: center; align-items: center; margin-top: 1rem; color: hsl(var(--foreground) / 0.6);">
                        <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                        <span>•</span>
                        <span>Por <?php the_author(); ?></span>
                    </div>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div style="margin-bottom: 2rem; text-align: center;">
                        <?php the_post_thumbnail('hero-image', array('style' => 'max-width: 100%; height: auto; border-radius: var(--radius);')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content" style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'atlas-patrimonial'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
                
                <footer class="entry-footer" style="max-width: 800px; margin: 2rem auto; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                    <?php
                    $categories = get_the_category();
                    if ($categories) {
                        echo '<div style="margin-bottom: 1rem;"><strong>Categorias:</strong> ';
                        foreach ($categories as $category) {
                            echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a> ';
                        }
                        echo '</div>';
                    }
                    
                    $tags = get_the_tags();
                    if ($tags) {
                        echo '<div><strong>Tags:</strong> ';
                        foreach ($tags as $tag) {
                            echo '<a href="' . esc_url(get_tag_link($tag->term_id)) . '">' . esc_html($tag->name) . '</a> ';
                        }
                        echo '</div>';
                    }
                    ?>
                </footer>
            </article>
            
            <div style="max-width: 800px; margin: 3rem auto;">
                <?php
                the_post_navigation(array(
                    'prev_text' => '<span>← Post Anterior</span><br>%title',
                    'next_text' => '<span>Próximo Post →</span><br>%title',
                ));
                
                if (comments_open() || get_comments_number()) :
                    comments_template();
                endif;
                ?>
            </div>
            <?php
        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>
