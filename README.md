# UPCOIN: O Segredo das Criptos - Landing Page

Landing page mobile-first para venda do ebook "UPCOIN: O Segredo das Criptos", desenvolvida com Next.js 14+ e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- Next.js 14+ (App Router)
- React 18
- Tailwind CSS
- Framer Motion (animações)
- Mobile-first approach

## 🎨 Características

- Design responsivo otimizado para mobile (320px - 768px) e desktop (>1024px)
- Paleta de cores laranja (#FF6B00, #FF8C00) e preto (#000000, #0A0A0A)
- Animações leves e performáticas
- Componentes reutilizáveis
- Accordion para mobile otimizado
- Carousel touch para depoimentos
- Timer de oferta especial
- Garantia de 7 dias

## 📁 Estrutura do Projeto

```
upcoin/
├── app/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── HeroSection.jsx
│   ├── ProblemSolution.jsx
│   ├── Benefits.jsx
│   ├── ProductShowcase.jsx
│   ├── Testimonials.jsx
│   ├── AuthorSection.jsx
│   ├── SpecialOffer.jsx
│   ├── FAQ.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css
├── public/
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Funcionalidades Mobile

- Botão CTA sticky no bottom
- Accordion otimizado para touch
- Carousel swipe para depoimentos
- Tap targets mínimos de 44px
- Loading states para interações
- Reduced-motion support

## 🎯 Otimizações

- Server-side rendering quando possível
- Lazy loading de imagens
- Fontes otimizadas com next/font
- PWA ready
- Animações performáticas (apenas eixo Y)
- Transições curtas (max 300ms)

## 📝 Licença

Este projeto é privado e destinado exclusivamente para venda do ebook UPCOIN.