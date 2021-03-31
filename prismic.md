## Prismic CMS

Após criar o seu repositório vá até a aba de "Custom Types", adicione um novo com as seguintes configurações

Tipo: Repeatable Type

Name: posts

Campos:

 - UID - slug
 - KeyText - title
 - KeyText - subtitle
 - KeyText - author
 - Image - banner
 - Group - content
 - Group - content - KeyText - heading
 - Group - content - RichText - body

Na aba "Documents" será possível adicionar os posts.

Para configurar os previews será necessário acessar settings>Previews e adicionar uma configuração de Previews:

Site Name: Nome do seu site
Domain for your application: http://localhost:3000 (em caso de utilização em localhost/desenvolvimento)
Link Resolver: /api/preview

