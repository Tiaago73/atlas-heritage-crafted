=== Atlas Patrimonial WordPress Theme ===

Tema criado para a Atlas Patrimonial - Gestão de Patrimônio Imobiliário

== INSTALAÇÃO ==

1. Faça o upload da pasta 'wordpress-theme' para '/wp-content/themes/' no seu servidor WordPress
2. Renomeie a pasta para 'atlas-patrimonial'
3. Ative o tema através do menu 'Aparência > Temas' no WordPress
4. Configure o tema em 'Aparência > Personalizar'

== CONFIGURAÇÃO ==

### 1. Logo e Nome do Site
- Vá em Aparência > Personalizar > Identidade do Site
- Faça upload do logo (imagem do logo Atlas)
- Configure o nome do site como "ATLAS PATRIMONIAL"

### 2. Menu Principal
- Vá em Aparência > Menus
- Crie um novo menu chamado "Menu Principal"
- Adicione as páginas: Home, Sobre, Soluções, Cases, Blog, Mídia, FAQ, Contato
- Atribua ao local "Primary Menu"

### 3. Hero Section (Página Inicial)
- Vá em Aparência > Personalizar > Hero Section
- Configure o título, subtítulo e imagem de fundo

### 4. Informações de Contato
- Vá em Aparência > Personalizar > Informações de Contato
- Configure telefone, email e endereço

### 5. Widgets do Footer
- Vá em Aparência > Widgets
- Configure os 3 widgets do footer com suas informações

== CUSTOM POST TYPES ==

### Cases (case_study)
- Use este tipo de post para criar cases de sucesso
- Campos personalizados disponíveis:
  - Localização
  - Preço
  - ROI
  - Área (m²)
- URL: /cases/nome-do-case/

### Depoimentos (testimonial)
- Use este tipo de post para adicionar depoimentos de clientes
- Adicione a foto do cliente como imagem destacada

== PÁGINAS RECOMENDADAS ==

Crie as seguintes páginas no WordPress:

1. Home (defina como página inicial em Configurações > Leitura)
2. Sobre
3. Soluções
4. Cases (use o template de arquivo de cases)
5. Blog (use a página de posts padrão)
6. Mídia
7. FAQ
8. Contato
9. Área do Cliente
10. Política de Privacidade
11. Termos de Uso

== ESTRUTURA DE ARQUIVOS ==

atlas-patrimonial/
├── style.css (estilos principais do tema)
├── functions.php (funcionalidades do tema)
├── header.php (cabeçalho)
├── footer.php (rodapé)
├── index.php (template principal)
├── page.php (template de páginas)
├── single.php (template de posts)
├── single-case_study.php (template de cases)
├── archive-case_study.php (arquivo de cases)
├── images/
│   ├── logo.png (adicione seu logo aqui)
│   └── hero-skyline.jpg (adicione a imagem do hero aqui)
└── js/
    └── main.js (scripts personalizados)

== NOTAS IMPORTANTES ==

1. Faça upload das imagens:
   - Coloque o logo em /images/logo.png
   - Coloque a imagem do hero em /images/hero-skyline.jpg

2. Personalize as cores:
   - As cores principais estão definidas em style.css usando variáveis CSS
   - Edite as variáveis :root para alterar o esquema de cores

3. Para adicionar novos estilos:
   - Adicione CSS customizado em style.css
   - Ou use o Customizer em Aparência > Personalizar > CSS Adicional

4. Para funcionalidades avançadas:
   - Instale plugins recomendados como Contact Form 7, Yoast SEO
   - Para formulários de contato, use Contact Form 7

== SUPORTE ==

Para dúvidas sobre o tema, consulte a documentação do WordPress:
https://wordpress.org/support/

== CHANGELOG ==

= 1.0.0 =
* Versão inicial do tema
* Suporte a custom post types (Cases e Depoimentos)
* Hero section customizável
* Menu responsivo
* Footer com widgets
* Templates para páginas e posts
