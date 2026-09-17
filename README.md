# as-miranda

Personal digital system / portfolio / archive for Ana Sofia de Miranda.

## Stack
- React 19
- React Router
- Vite
- CSS moderno, sem UI kit
- lucide-react para ícones

## Estrutura de conteúdo
O conteúdo editável fica principalmente em `src/data/index.js`:
- `projects`
- `posts`
- `experience`
- `education`
- `skills`

Use `[ADICIONAR INFORMAÇÃO]` onde o site ainda precisa de dados reais.

## Rotas
- `/`
- `/projects`
- `/projects/:slug`
- `/archive`
- `/archive/:slug`
- `/curriculum`
- `/about`
- `/contact`

## Interações
- `Ctrl/Cmd + K`: command palette
- tema claro/escuro persistente
- filtros de projetos e arquivo
- pesquisa do arquivo
- currículo timeline/clássico
- formulário de contato com estado de sucesso local

## Deploy
O projeto mantém `base: "/as-miranda/"` para GitHub Pages.
