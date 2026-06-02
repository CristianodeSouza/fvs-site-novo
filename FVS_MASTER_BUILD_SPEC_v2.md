# FVS Incorporações - Master Build Specification v2

## Visão Geral
Site institucional para FVS Incorporações com foco em apresentação de projetos, valores da empresa e geração de leads.

## Stack Tecnológico
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + CSS Modules
- **Componentes UI**: Custom + Shadcn/ui (conforme necessário)
- **Type Safety**: TypeScript
- **Build**: Turbopack (Next.js default)
- **Deployment**: Vercel

## Arquitetura de Diretórios

```
FVS SITE NOVO/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── (pages)/             # Páginas privadas
│   ├── api/                 # API routes (se necessário)
│   └── globals.css          # Estilos globais
├── components/              # Componentes React
│   ├── ui/                  # Componentes base (buttons, cards, etc)
│   ├── layout/              # Header, Footer, Nav
│   └── sections/            # Seções de página (Hero, About, etc)
├── lib/                     # Utilitários e helpers
│   ├── utils.ts            # Funções utilitárias
│   ├── constants.ts        # Constantes da aplicação
│   └── types.ts            # Type definitions
├── styles/                  # Estilos globais
│   ├── globals.css         # Reset + variáveis
│   └── variables.css       # CSS variables
├── public/                  # Assets estáticos
│   ├── images/             # Imagens otimizadas
│   ├── icons/              # Icons SVG
│   └── fonts/              # Web fonts
├── docs/                    # Documentação técnica
│   ├── ARCHITECTURE.md     # Decisões arquiteturais
│   ├── COMPONENTS.md       # Documentação de componentes
│   └── SETUP.md            # Guia de setup
├── .claude/
│   └── settings.json       # Configurações Claude Code
├── CLAUDE.md               # Instruções para Claude
├── README.md               # Overview do projeto
├── FVS_MASTER_BUILD_SPEC_v2.md  # Este arquivo
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.js
```

## Fases de Implementação

### Fase 1: Arquitetura (✓ CONCLUÍDA)
- [x] Estrutura de diretórios
- [x] Documentação base

### Fase 2: Setup & Configuração
- [ ] Instalação de dependências
- [ ] Configuração Tailwind CSS
- [ ] TypeScript setup
- [ ] Criação de layout base

### Fase 3: Componentes Base
- [ ] UI components (Button, Card, etc)
- [ ] Layout components (Header, Footer, Nav)
- [ ] Criação de design tokens

### Fase 4: Seções de Página
- [ ] Hero section
- [ ] About section
- [ ] Projects showcase
- [ ] Call-to-action sections
- [ ] Contact form

### Fase 5: Páginas
- [ ] Homepage completa
- [ ] Página de projetos
- [ ] Sobre a empresa
- [ ] Contato

### Fase 6: Otimização & Deploy
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Deploy em Vercel

## Padrões & Convenções

### Nomenclatura
- Componentes: PascalCase (Button.tsx, HeroSection.tsx)
- Funções/utilities: camelCase (useNavigation.ts, formatDate.ts)
- Constantes: UPPER_SNAKE_CASE
- Diretórios: kebab-case

### Estrutura de Componente
```
components/ui/Button/
├── Button.tsx
├── Button.types.ts
└── Button.module.css (se necessário)
```

### Imports
- Imports absolutos usando @ alias
- Ordem: React imports → Next imports → Externos → Internos

## Padrões de Código

### TypeScript
- Strict mode habilitado
- Sem uso de any
- Interfaces e types explícitos

### React
- Functional components only
- Hooks pattern
- Props interface tipadas

### Styling
- Tailwind CSS como padrão
- CSS Modules para componentes com estilos específicos
- Sem inline styles
