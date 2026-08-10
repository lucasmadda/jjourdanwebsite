# João Jourdan — portfólio

Site-vitrine da trajetória de **João Jourdan**, maître e autor da carta de drinques do Miam Miam (Botafogo, Rio de Janeiro). One-page estático, sem frameworks: HTML + CSS + JavaScript puro.

## Ver localmente

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## Publicar no GitHub Pages

A publicação é automática: todo push em `main` dispara o workflow
`.github/workflows/pages.yml`, que publica o site em
`https://<usuario>.github.io/jjourdanwebsite/`. Se for a primeira execução,
o próprio workflow habilita o Pages no repositório.

Caso prefira desativar o workflow, dá para publicar manualmente em
**Settings → Pages → Deploy from a branch** (`main`, pasta `/ (root)`).

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Todo o conteúdo e os SVGs (taça da hero, ícones de copos) |
| `css/tokens.css` | Paleta, tipografia, espaçamento — as decisões de design em um lugar só |
| `css/styles.css` | Layout de cada seção + responsivo (900px / 540px) |
| `js/main.js` | Navbar ao rolar + animações de entrada (o site funciona sem JS) |
| `assets/favicon.svg` | Ícone da aba |

A única dependência externa é o `@import` do Google Fonts (Fraunces + Inter) na primeira linha de `css/tokens.css`. Sem as fontes, o site degrada para Georgia/fonte do sistema sem quebrar.

## Placeholders para trocar

| O quê | Onde |
|---|---|
| Foto do salão | `index.html`, elemento `#foto-salao` — trocar o `<div class="placeholder-frame">` por `<img>` (o comentário no HTML mostra como) |
| Retrato de João | `index.html`, elemento `#foto-retrato` — mesmo procedimento |
| WhatsApp, e-mail e Instagram | Buscar `data-todo="contato"` no `index.html` (6 ocorrências: 3 na seção de contato, 3 no rodapé) e colocar links reais (`https://wa.me/…`, `mailto:…`, `https://instagram.com/…`). Depois, remover a linha "Canais em atualização…" |

## Checklist — VALIDAR COM JOÃO antes de publicar

Cada item tem um comentário `<!-- VALIDAR COM JOÃO -->` no ponto exato do `index.html`:

1. **Título e anos** — as fontes públicas o registram como *bartender* do Miam Miam; o site o apresenta como *maître*. Confirmar o(s) título(s) e o ano em que entrou na casa.
2. **Recorte de 2001** — contexto real da menção na imprensa de 1–7 de novembro de 2001 (veículo e casa da época).
3. **MOK Sakebar** — período, função e grafia (a linha do tempo diz "c. 2011").
4. **Vínculo atual** — se João segue no Miam Miam após a reformulação dos 20 anos (2025).
5. **Fé** — o termo que ele prefere (candomblé, umbanda, axé…) e se quer o tema no site. A coluna "Fé" da seção Raízes pode ser removida sem quebrar o layout.
6. **Biologia** — o texto diz "conhece biologia"; confirmar formação/estudo real.
7. **Ingredientes** — Pacam, Lichee Martini e Caipi du Bois estão como "receita da casa"; confirmar com ele.
8. **O próximo capítulo** — a formulação do projeto do restaurante de brasilidades (público, propósito, termos). O projeto ainda não tem nome — nada foi batizado.

## Fatos com fonte pública

- Dicas de clientes no Foursquare e o guia da Time Out registram João Jourdan como criador da maior parte da carta de drinques do Miam Miam ("ele sabe agradar cada paladar").
- Em dezembro de 2014, foi um dos 8 vencedores nacionais do concurso **Cocktail Journey** (Ketel One + Tanqueray Nº TEN/Diageo), que avaliou cerca de 100 bares e restaurantes em 20 cidades — classificando-se para a etapa brasileira do **Diageo World Class** (ciclo 2015).
- O Miam Miam abriu em 2005, tem o **Bib Gourmand** do Guia Michelin (2015 → guia 2026), venceu o prêmio Rio Show de "melhor moderno" (2007–2008) e o Veja Rio Comer & Beber de "melhor carta de drinques"; celebrou 20 anos em 2025.
