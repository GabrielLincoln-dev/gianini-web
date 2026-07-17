Objetivo: eliminar do site toda linguagem que prometa resultados comerciais diretos (vendas, lucro, leads, faturamento, conversão) e reposicionar a comunicação em torno de construção de presença digital, identidade de marca e autoridade online.

Onde está o problema identificado
- Os textos de marketing vivem principalmente no dicionário bilíngue `src/i18n.tsx` (PT e EN).
- Expressões como "Sites que convertem", "atrair o público certo e converter visitantes em clientes", "geram resultado mensurável" e "transformar visitantes em clientes" configuram promessas de performance fora do controle direto da agência.

O que será alterado
1. Hero (`t.hero.title` e `t.hero.sub`)
   - Título: deixar de lado "convertem" e focar em "presença digital", "identidade online" ou "autoridade local".
   - Subtítulo: manter menção a SEO local e visibilidade em Arujá, mas redigir como possibilidade/oportunidade ("fortalecer visibilidade" / "aumentar as chances de ser encontrado") e não como garantia de resultado.

2. CEO / Sobre (`t.ceo.body`)
   - Remover a frase "geram resultado mensurável no dia a dia".
   - Reforçar o que é entregue: código próprio, performance, SEO, experiência do usuário e proximidade com o cliente.

3. Por que nós (`t.why.sub` e `t.why.items`)
   - Subtítulo: reescrever sem "atrair o público certo" e "converter visitantes em clientes".
   - Itens: manter os benefícios (design, SEO, autoridade, performance, presença, suporte), mas trocar descrições que sugiram resultado garantido.

4. Atendimento em Arujá (`t.local.p2`)
   - Remover "transformar visitantes em clientes".
   - Focar em ser encontrado, transmitir credibilidade e consolidar presença digital.

5. Formulário de contato (`t.form.title` / `t.form.sub`)
   - Manter o convite à conversa, mas sem prometer que o envio gerará uma "solução que dá resultado".

6. Rodapé e outras frases de apoio
   - Revisar se há alguma promessa residual de crescimento/receita e ajustar.

O que será mantido
- Todas as referências locais de SEO (Arujá, bairros, cidades vizinhas, Alto Tietê).
- Estrutura de componentes e layout existentes.
- CTA do WhatsApp e formulário de captura.
- Páginas de privacidade (LGPD) — o conteúdo é descritivo e não promete resultados; ajustar apenas se alguma frase soe comercial demais.

Validação
- `tsc --noEmit` para garantir que nenhuma quebra de tipos ocorra.
- Leitura rápida das seções alteradas no preview para confirmar fluidez e ausência de promessas.