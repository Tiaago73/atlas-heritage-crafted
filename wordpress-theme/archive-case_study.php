<?php get_header(); ?>

<main class="section">
    <div class="container">
        <header class="section-heading">
            <h1>Nossos Cases de Sucesso</h1>
            <p>Conheça os resultados reais que entregamos aos nossos clientes</p>
        </header>
        
        <?php if (have_posts()) : ?>
            <div class="card-grid">
                <?php while (have_posts()) : the_post(); 
                    $location = get_post_meta(get_the_ID(), '_case_location', true);
                    $roi = get_post_meta(get_the_ID(), '_case_roi', true);
                    ?>
                    <article class="card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 1rem; overflow: hidden; border-radius: var(--radius);">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('card-image', array('style' => 'width: 100%; height: auto; transition: transform 0.3s;')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        
                        <?php if ($location) : ?>
                            <p style="color: hsl(var(--foreground) / 0.6); margin-bottom: 0.5rem;"><?php echo esc_html($location); ?></p>
                        <?php endif; ?>
                        
                        <?php if ($roi) : ?>
                            <div style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--primary)); margin-bottom: 1rem;">
                                ROI: <?php echo esc_html($roi); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div><?php the_excerpt(); ?></div>
                        
                        <a href="<?php the_permalink(); ?>" class="btn btn-primary" style="margin-top: 1rem;">Ver Detalhes</a>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <?php the_posts_pagination(); ?>
        <?php else : ?>
            <p>Nenhum case encontrado.</p>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
