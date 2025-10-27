<?php get_header(); ?>

<?php if (is_front_page()) : ?>
    <!-- Hero Section -->
    <section class="hero-section" style="background-image: url('<?php echo esc_url(get_theme_mod('hero_image', get_template_directory_uri() . '/images/hero-skyline.jpg')); ?>');">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1><?php echo esc_html(get_theme_mod('hero_title', 'Gestão Patrimonial Inteligente')); ?></h1>
            <p><?php echo esc_html(get_theme_mod('hero_subtitle', 'Maximize o retorno do seu patrimônio imobiliário com estratégias personalizadas')); ?></p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="<?php echo esc_url(home_url('/contato')); ?>" class="btn btn-primary">Fale Conosco</a>
                <a href="<?php echo esc_url(home_url('/solucoes')); ?>" class="btn btn-outline">Nossas Soluções</a>
            </div>
        </div>
    </section>
    
    <!-- Main Content -->
    <main class="section">
        <div class="container">
            <div class="section-heading">
                <h2>Bem-vindo à Atlas Patrimonial</h2>
                <p>Gestão profissional de patrimônio imobiliário</p>
            </div>
            
            <?php
            if (have_posts()) :
                echo '<div class="card-grid">';
                while (have_posts()) : the_post();
                    ?>
                    <article class="card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 1rem;">
                                <?php the_post_thumbnail('card-image', array('style' => 'width: 100%; height: auto; border-radius: var(--radius);')); ?>
                            </div>
                        <?php endif; ?>
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <div><?php the_excerpt(); ?></div>
                        <a href="<?php the_permalink(); ?>" class="btn btn-primary" style="margin-top: 1rem;">Leia Mais</a>
                    </article>
                    <?php
                endwhile;
                echo '</div>';
                
                the_posts_pagination();
            else :
                echo '<p>Nenhum conteúdo encontrado.</p>';
            endif;
            ?>
        </div>
    </main>
    
<?php else : ?>
    <!-- Blog/Archive Page -->
    <main class="section">
        <div class="container">
            <?php
            if (have_posts()) :
                echo '<div class="card-grid">';
                while (have_posts()) : the_post();
                    get_template_part('template-parts/content', get_post_type());
                endwhile;
                echo '</div>';
                
                the_posts_pagination();
            else :
                echo '<p>Nenhum conteúdo encontrado.</p>';
            endif;
            ?>
        </div>
    </main>
<?php endif; ?>

<?php get_footer(); ?>
