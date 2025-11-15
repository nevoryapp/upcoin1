## Objetivo
- Modernizar e unificar o visual do site, melhorando legibilidade, consistência, responsividade e apelo do CTA.

## Stack Detectado
- Next.js (App Router) em `app/`
- Tailwind CSS com tema básico em `tailwind.config.js`
- Framer Motion para animações
- Estilos utilitários globais em `styles/globals.css`

## Diretrizes de UI/UX
- Tipografia: hierarquia clara (H1/H2/H3), linhas mais confortáveis e contraste adequado.
- Cores: paleta primária laranja (marca), secundária para destaques, cinzas neutros consistentes.
- Espaçamento: escala previsível e respiro entre blocos.
- Componentização: padrões de seção, cartões e botões reutilizáveis.
- Responsividade: grids e containers consistentes em todos os breakpoints.
- Acessibilidade: foco visível, `prefers-reduced-motion`, contraste e alt text.

## Atualizações de Tema (Tailwind)
- `tailwind.config.js`:
  - Expandir `colors`: `primary` (50–900), `secondary` (violeta/azul escuro), `neutral` (cinzas), `success`, `warning`.
  - Configurar `container` com `center: true` e `padding` por breakpoint.
  - Adicionar `boxShadow` e `borderRadius` mais suaves (ex.: `shadow-soft`, `rounded-3xl`).
  - Definir `keyframes`/`animation` leves (ex.: `float`, `glow`) para efeitos sutis sem depender sempre do Framer.
- Fonte `Inter` carregada corretamente via `next/font` em `app/layout.js` (substitui o `link` manual).

## Utilitários Globais
- `styles/globals.css`:
  - Reforçar `body` com `leading-relaxed` e cor de texto padrão mais legível.
  - Criar utilitários: `btn-secondary`, `btn-outline`, `card`, `badge`, `section` (padding padrão), `container-app`.
  - Padronizar `card-glass` com opacidade/blur e borda/ring consistentes.

## Padronização por Seção
- `HeroSection.jsx`:
  - Ajustar animações (easing, duração) e cursor do typewriter; reduzir ruído visual das partículas.
  - CTA com `btn-primary` maior, âncoras de confiança como `badge` compacto.
  - Container e espaçamentos via `section`/`container-app`.
- `Benefits.jsx`:
  - Cartões com `card` padrão, ícones em `badge` arredondado, hover sutil.
  - Grid com gaps consistentes e títulos H2/H3 padronizados.
- `ProductShowcase.jsx`:
  - Mockup com sombra/gradiente refinados; lista de capítulos com estados ativos mais claros.
  - Unificar `ring` e tipografia para descrição.
- `Testimonials.jsx`:
  - Cartões com avatar maior, `prose` leve para depoimentos; indicadores do carousel acessíveis.
  - Métricas com paleta consistente e espaçamento vertical.
- `SpecialOffer.jsx`, `FAQ.jsx`, `ProfitCalculator.jsx`, `CryptoQuiz.jsx`, `TrustElements.jsx`, `EasyLearning.jsx`, `Footer.jsx`:
  - Aplicar `section`/`container-app` e padrão de títulos.
  - Botões/links com variantes globais; bordas e sombras consistentes.
  - FAQ com melhor legibilidade (expansão suave, `prose-sm`).

## Acessibilidade e Performance
- `prefers-reduced-motion`: desativar animações intensas quando ativo.
- Foco visível em botões/links, uso de `ring` padrão.
- Contraste de texto em fundos escuros (`text-gray-200/300` vs. `text-gray-400`).
- Otimização de imagens (dimensões/`loading` apropriado) e redução de blur pesado.

## Verificação
- Rodar em desenvolvimento e validar responsividade em `sm`/`md`/`lg`/`xl`.
- Checklist de acessibilidade básica (foco, contraste, labels/alt).
- Revisão visual dos CTAs e cartas em todas as seções.

## Entregáveis
- Atualização de `tailwind.config.js` e `styles/globals.css` com tokens/utilitários.
- Ajustes nos componentes em `components/` para adotar os novos padrões.
- Fonte `Inter` via `next/font` em `app/layout.js`.
- Resultados verificados com build local e preview para validação final.