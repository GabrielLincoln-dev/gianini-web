
# Site Gianini Web

Site institucional bilíngue (PT-BR / EN), single page com rotas adicionais para Política de Privacidade. Fiel à paleta do logo (azul elétrico sobre preto/navy texturizado).

## Identidade visual

- **Cores**: fundo `#05060A` (preto-azulado), superfícies `#0B1224`, primário `#1E90FF → #00BFFF` (gradiente como no logo), texto `#E8F1FF`, mutado `#7A8AA8`.
- **Tipografia**: Space Grotesk (display) + Inter (body) — moderno tech, combina com o logo geométrico.
- **Acentos**: gradientes radiais sutis azuis, grão fino no fundo (lembra a textura do logo), sombras com glow azul.
- **Favicon**: logo GW fornecida.

## Estrutura de rotas (TanStack Start)

```
src/routes/
  __root.tsx              # head: favicon GW, fontes, metadata bilíngue
  index.tsx               # landing (todas seções)
  privacidade.tsx         # política LGPD (PT)
  privacy.tsx             # política LGPD (EN)
```

## Navbar

Fixa, translúcida com blur. Logo GW à esquerda + links âncora (Início, Sobre, Projetos, Por que nós, Contato) + link "Privacidade" + seletor PT/EN à direita. Menu hamburguer em mobile.

## Seções da Home

1. **Hero** — 2 colunas. Esquerda: headline ("Sites que convertem. Presença que constrói autoridade."), subtítulo descrevendo a Gianini Web (sites, blogs, landing pages, web apps, fundada em 2024), CTAs "Fale conosco" + "Ver projetos". Direita: logo GW grande com glow animado (framer-motion).

2. **CEO / Sobre o fundador** — 2 colunas invertidas. Esquerda: foto do Gabriel Gianini (cards arredondado, borda gradiente). Direita: parágrafo sobre Gabriel — desenvolvedor formado em ADS pela Eniac, fundador em 2024.

3. **Projetos realizados** — grid estilo "blocos Gutenberg" (card-grid uniforme com bordas marcadas e hover lift). 4 cards clicáveis (target=_blank, rel=noopener):
   - CS Innovation → https://cs-innovation-six.vercel.app
   - Orquestra Sinfônica de Arujá → https://orquestrasinfonicaaruja.netlify.app/
   - Colégio Hipercubo → https://colegiohipercubo.com.br
   - ONG Raio de Sol → https://institutionalongrsaruja.netlify.app/
   Logos hospedados via lovable-assets a partir dos uploads.

4. **Por que escolher a Gianini Web** — bullets com ícones (lucide): Design sob medida, SEO técnico, Consolidação de presença digital, Autoridade de marca, Performance e Core Web Vitals, Suporte próximo. Texto persuasivo curto no topo.

5. **Formulário de captura de leads** — campos: Nome, Empresa, Email, Telefone (WhatsApp do cliente), Descrição da dor / necessidade. Validação com Zod + react-hook-form. Checkbox de consentimento LGPD ("Li e concordo com a Política de Privacidade").
   - **Submit**: monta mensagem formatada e abre `https://wa.me/5511965636396?text=...` com `encodeURIComponent`. Todos os dados (incl. telefone do cliente) vão na mensagem. Nenhum dado é armazenado em backend — comunicação direta via WhatsApp, sem cookies/tracking adicional (mantém escopo LGPD mínimo).

6. **Footer** — endereço (Rua Jacarandás 645, Arujá SP), botões Instagram (@gianini_web) e WhatsApp (+55 11 96563-6396), link para Política de Privacidade, copyright "© 2026 Gianini Web. Todos os direitos reservados."

## Política de Privacidade (LGPD)

Página dedicada com: controlador (Gianini Web), dados coletados (nome, empresa, email, telefone, mensagem), finalidade (contato comercial), base legal (consentimento art. 7º LGPD), compartilhamento (envio via WhatsApp/Meta — citado), direitos do titular (art. 18 LGPD), retenção, contato do encarregado (email + WhatsApp), data da última atualização.

## i18n

Implementação leve sem libs: dicionário PT/EN em `src/i18n/dict.ts`, hook `useT()` com estado em Context + persistência em `localStorage`. Seletor PT/EN na navbar. Rotas separadas só para política (`/privacidade` e `/privacy`); o resto troca conteúdo in-place.

## Detalhes técnicos

- **Assets**: logo GW, logos dos 4 clientes e foto do CEO (será enviada) → upload via `lovable-assets create` → pointers `.asset.json` em `src/assets/`.
- **Favicon**: link no `__root.tsx` apontando para o asset da logo GW.
- **SEO**: cada rota com `head()` próprio (title, description, og:title, og:description, og:image=logo GW).
- **Animações**: framer-motion para fade/slide-up nas seções e glow do logo no hero.
- **Acessibilidade**: contraste WCAG AA, labels em todos os inputs, foco visível, `aria-label` nos botões sociais.
- **Sem backend**: nenhum dado persistido; formulário só dispara `wa.me`.

## Próximo passo

Após aprovar o plano, envie a foto do Gabriel para eu incluir na seção do CEO. Posso começar a construção e você anexa a foto na sequência (uso um placeholder temporário até receber).
