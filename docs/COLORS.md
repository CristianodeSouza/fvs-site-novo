# Paleta Oficial - FVS Incorporações

## Cores Oficiais

```css
--verde-profundo: #1D281F;
--verde-serra: #2B3A2C;
--pedra: #C2AE8F;
--pedra-clara: #DDD0B8;
--off-white: #F4F0E8;
--branco-quente: #FAF7F0;
--preto-quente: #171713;
```

## Como Usar

### Via Classes Tailwind CSS

```tsx
<div className="bg-verde-profundo text-branco-quente">
  <h1>Título</h1>
</div>

<button className="text-pedra-clara hover:text-branco-quente">
  Botão
</button>
```

### Via CSS Variables

```css
.element {
  color: var(--branco-quente);
  background-color: var(--verde-profundo);
  border-color: var(--pedra);
}
```

## Descrição das Cores

- **verde-profundo**: Cor primária escura, backgrounds principais
- **verde-serra**: Verde secundário, backgrounds complementares
- **pedra**: Tom neutro, borders e elementos secundários
- **pedra-clara**: Tom claro, textos secundários
- **off-white**: Branco ligeiramente amarelado, backgrounds leves
- **branco-quente**: Branco com tom quente, textos principais
- **preto-quente**: Preto com tom quente, overlays e contraste máximo
