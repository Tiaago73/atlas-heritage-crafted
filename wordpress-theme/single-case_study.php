<?php get_header(); ?>

<main class="section">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
            $location = get_post_meta(get_the_ID(), '_case_location', true);
            $price = get_post_meta(get_the_ID(), '_case_price', true);
            $roi = get_post_meta(get_the_ID(), '_case_roi', true);
            $area = get_post_meta(get_the_ID(), '_case_area', true);
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="section-heading">
                    <h1><?php the_title(); ?></h1>
                    <?php if ($location) : ?>
                        <p style="font-size: 1.125rem;"><?php echo esc_html($location); ?></p>
                    <?php endif; ?>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div style="margin-bottom: 2rem; text-align: center;">
                        <?php the_post_thumbnail('hero-image', array('style' => 'max-width: 100%; height: auto; border-radius: var(--radius);')); ?>
                    </div>
                <?php endif; ?>
                
                <div style="max-width: 800px; margin: 0 auto 3rem;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                        <?php if ($price) : ?>
                            <div class="card" style="text-align: center;">
                                <div style="font-size: 2rem; font-weight: 700; color: hsl(var(--primary));"><?php echo esc_html($price); ?></div>
                                <div style="color: hsl(var(--foreground) / 0.6);">Valor do Investimento</div>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($roi) : ?>
                            <div class="card" style="text-align: center;">
                                <div style="font-size: 2rem; font-weight: 700; color: hsl(var(--primary));"><?php echo esc_html($roi); ?></div>
                                <div style="color: hsl(var(--foreground) / 0.6);">ROI</div>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($area) : ?>
                            <div class="card" style="text-align: center;">
                                <div style="font-size: 2rem; font-weight: 700; color: hsl(var(--primary));"><?php echo esc_html($area); ?> m²</div>
                                <div style="color: hsl(var(--foreground) / 0.6);">Área Total</div>
                            </div>
                        <?php endif; ?>
                    </div>
                    
                    <div class="entry-content" style="line-height: 1.8;">
                        <?php the_content(); ?>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <a href="<?php echo esc_url(home_url('/cases')); ?>" class="btn btn-primary">Ver Todos os Cases</a>
                </div>
            </article>
            <?php
        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>
