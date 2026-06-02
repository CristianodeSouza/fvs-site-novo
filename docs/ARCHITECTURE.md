# Arquitetura e Padrões

## Princípios Arquiteturais

### 1. Estrutura de Componentes
- Componentes são organizados por tipo (UI, Layout, Sections)
- Cada componente relevante tem sua própria pasta
- Estilos específicos ficam próximos ao componente

### 2. Padrão de Pastas
```
components/
├── ui/                  # Componentes reutilizáveis e genéricos
├── layout/             # Componentes estruturais (Header, Footer)
└── sections/           # Componentes de seção de página
```

### 3. Naming Conventions
- Arquivos: PascalCase para componentes (Button.tsx)
- Funções: camelCase (useNavigation.ts)
- Constantes: UPPER_SNAKE_CASE

### 4. Imports
- Usar @ alias para importações internas
- Manter ordem: React → Next → Externos → Internos

## Design Tokens

### Cores
A definir em `styles/variables.css`

### Tipografia
A definir em `tailwind.config.js`

### Espaçamento
A definir em `tailwind.config.js`

## Padrões React

- Functional components only
- Hooks para estado e side effects
- Props fortemente tipadas (TypeScript)
- Sem prop drilling (usar Context quando apropriado)

## Padrões de Estilo

- Tailwind CSS como padrão
- CSS Modules para override específico
- Sem inline styles
- Variáveis CSS para temas

## Próximas Fases
Ver `COMPONENTS.md` para estrutura de componentes específicos.
