# CLAUDE.md - Instruções para Claude Code

## Visão Geral do Projeto
Site institucional para FVS Incorporações. Stack: Next.js 14+, TypeScript, Tailwind CSS, React.

## Escopo Atual
**Fase 1 - Arquitetura Inicial**: Estrutura de diretórios e documentação base.

## Instruções Gerais

### Convenções de Código
- **Components**: PascalCase, TypeScript, functional components
- **Utils/Functions**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Imports**: Usar @ alias para importações internas
- **Estilos**: Tailwind CSS como padrão

### Padrões
- Sem comentários desnecessários (código bem nomeado é auto-documentado)
- TypeScript strict mode
- Sem `any` types
- Props interface explícitas

### Estrutura de Arquivos
- Componentes com sua própria pasta se tiverem styles específicos
- Exports nomeados para componentes (não default exports)
- Arquivos de tipos em `lib/types.ts` quando apropriado

## Próximos Passos (Ordenados)

1. **Instalação de Dependências** (Fase 2)
   - Criar package.json com Next.js, React, TypeScript, Tailwind
   - Setup inicial de tsconfig.json
   - Setup tailwind.config.js

2. **Configuração Base** (Fase 2)
   - Criar app/layout.tsx (root layout)
   - Criar app/page.tsx (homepage placeholder)
   - Configurar styles globais
   - Setup de variáveis CSS

3. **Componentes Base** (Fase 3)
   - UI components: Button, Card, Container
   - Layout components: Header, Footer, Navigation
   - Design tokens (cores, tipografia, espaçamento)

4. **Seções de Página** (Fase 4)
   - Hero section
   - About section
   - Projects showcase
   - CTA sections
   - Contact form

5. **Páginas Completas** (Fase 5)
   - Homepage com todas as seções
   - Página de projetos
   - Página sobre
   - Página de contato

6. **Otimização** (Fase 6)
   - SEO (meta tags, structured data)
   - Performance (image optimization, lazy loading)
   - Accessibility (a11y)

## Não Fazer Nesta Fase
- ❌ Implementar páginas funcionais
- ❌ Criar componentes
- ❌ Instalar dependências
- ❌ Utilizar localhost/dev server
- ❌ Criar database/API em detalhes

## Referências
- Build spec: `FVS_MASTER_BUILD_SPEC_v2.md`
- Arquitetura: `docs/ARCHITECTURE.md` (a ser criado)
- Documentação: `/docs` pasta
