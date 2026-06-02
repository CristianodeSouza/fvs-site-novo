# Tipografia - FVS Incorporações

## Fontes Oficiais

O projeto utiliza duas fontes principais, importadas via Google Fonts:

### Cormorant Garamond
- **Uso**: Headings (h1-h6), títulos, elementos editoriais
- **Pesos**: 300, 400, 500, 600, 700
- **Características**: Serif elegante, premium, editorial
- **Variável CSS**: `--font-heading`

### Outfit
- **Uso**: Body text, parágrafos, interface
- **Pesos**: 300, 400, 500, 600, 700
- **Características**: Sans-serif moderno, legível, clean
- **Variável CSS**: `--font-body`

---

## Como Usar

### Via Classes Tailwind CSS

```tsx
// Headings - Cormorant Garamond
<h1 className="font-heading text-4xl font-light">Título Principal</h1>
<h2 className="font-heading text-3xl font-medium">Subtítulo</h2>
<h3 className="font-heading text-2xl font-semibold">Seção</h3>

// Body - Outfit
<p className="font-body text-base font-normal">Parágrafo de texto</p>
<span className="font-body text-sm font-light">Texto secundário</span>
```

### Via CSS Variables

```css
/* Em componentes ou estilos CSS */
.custom-heading {
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 300;
}

.custom-body {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 400;
}
```

### Em Componentes React/TypeScript

```tsx
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-3xl font-medium leading-tight">
      {children}
    </h2>
  );
}

export function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-base font-normal leading-relaxed">
      {children}
    </p>
  );
}
```

---

## Escalas Tipográficas Recomendadas

### Headings (Cormorant Garamond)
```
h1: text-5xl md:text-6xl font-heading font-light
h2: text-4xl md:text-5xl font-heading font-light
h3: text-3xl md:text-4xl font-heading font-medium
h4: text-2xl font-heading font-medium
h5: text-xl font-heading font-semibold
h6: text-lg font-heading font-semibold
```

### Body (Outfit)
```
Large: text-lg font-body font-normal
Regular: text-base font-body font-normal
Small: text-sm font-body font-normal
XSmall: text-xs font-body font-light
```

### UI Elements
```
Button: text-sm font-body font-medium tracking-wider
Label: text-xs font-body font-semibold tracking-widest
Caption: text-xs font-body font-light text-gray-600
```

---

## Combinações Comuns

### Hero Section
```tsx
<h1 className="font-heading text-5xl md:text-6xl font-light leading-tight">
  Título Heroico
</h1>
<p className="font-body text-lg font-light text-gray-600 mt-6">
  Descrição ou subtítulo
</p>
```

### Card Title
```tsx
<h3 className="font-heading text-2xl font-medium mb-4">
  Título do Card
</h3>
<p className="font-body text-base font-normal text-gray-700">
  Conteúdo do card
</p>
```

### Navigation/Menu
```tsx
<a className="font-body text-xs font-medium tracking-widest hover:text-white">
  MENU ITEM
</a>
```

---

## Notas de Implementação

1. **Display Swap**: As fontes estão configuradas com `display: 'swap'` para evitar layout shift durante carregamento
2. **Pesos Importados**: Apenas pesos 300-700 são carregados para otimizar performance
3. **CSS Variables**: Disponíveis globalmente através de `--font-heading` e `--font-body`
4. **Tailwind Integration**: Classes `font-heading` e `font-body` integradas ao Tailwind para facilitar uso
5. **Fallbacks**: Se as fontes não carregarem, o navegador usará pesos do sistema como fallback

---

## Atualizações Futuras

- Adicionar font weights customizados ao Tailwind se necessário
- Considerar @font-face fallbacks para otimização avançada
- Documentar variações de tamanho por breakpoint (mobile/tablet/desktop)
