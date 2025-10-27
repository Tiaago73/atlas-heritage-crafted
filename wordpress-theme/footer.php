<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <?php if (is_active_sidebar('footer-1')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-1'); ?>
                </div>
            <?php endif; ?>
            
            <?php if (is_active_sidebar('footer-2')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-2'); ?>
                </div>
            <?php endif; ?>
            
            <?php if (is_active_sidebar('footer-3')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-3'); ?>
                </div>
            <?php endif; ?>
            
            <div class="footer-column">
                <h3>Contato</h3>
                <p><?php echo esc_html(get_theme_mod('contact_address', 'Av. Tambore, 267 - Tamboré, Barueri - SP, 06460-000')); ?></p>
                <p>Tel: <?php echo esc_html(get_theme_mod('contact_phone', '(11) 98765-4321')); ?></p>
                <p>Email: <?php echo esc_html(get_theme_mod('contact_email', 'contato@atlaspatrimonial.com.br')); ?></p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
