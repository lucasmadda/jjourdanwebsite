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
| Foto da seção "O anfitrião" | `index.html`, `#foto-salao` — hoje mostra a foto dos drinques da reportagem premiada da Veja (2008, reprodução do recorte da família); quando houver uma foto atual do João no salão, trocar o `src` mantendo a estrutura |
| Retrato de João | `index.html`, elemento `#foto-retrato` — trocar o `<div class="placeholder-frame">` por `<img>` (o comentário no HTML mostra como) |
| Foto de 2001 na timeline | `assets/joao-2001.jpg` — recorte da Folha Dirigida (foto: Salvador Scofano), tratado em duotone da paleta; confirmar com João se ele aprova o uso |
| WhatsApp, e-mail e Instagram | Buscar `data-todo="contato"` no `index.html` (6 ocorrências: 3 na seção de contato, 3 no rodapé) e colocar links reais (`https://wa.me/…`, `mailto:…`, `https://instagram.com/…`). Depois, remover a linha "Canais em atualização…" |

## Checklist — VALIDAR COM JOÃO antes de divulgar

Cada item tem um comentário `<!-- VALIDAR COM JOÃO -->` no ponto exato do `index.html`:

1. **Título** — a imprensa o registra como *barman* do Miam Miam; o site o apresenta como *maître* (informação da família/amigos). Confirmar o(s) título(s).
2. **Militância estudantil (2001)** — a timeline abre com a liderança no movimento estudantil (Folha Dirigida, 1º–7/11/2001, p. 9), incluindo a foto de Salvador Scofano em que ele aparece aos 17. Confirmar se ele quer esse capítulo (e a foto) no site e como prefere descrevê-lo.
3. **MOK Sakebar** — a entrada saiu da timeline: os próprios recortes mostram que, em 2009, o barman do MOK era Fabiano Dias; nenhum documento liga João à casa. Se ele teve passagem real por lá, colher período e função para recolocar.
4. **Vínculo atual** — se João segue no Miam Miam após a reformulação dos 20 anos (2025).
5. **Fé** — o termo que ele prefere (candomblé, umbanda, axé…) e se quer o tema no site. A coluna "Fé" da seção Raízes pode ser removida sem quebrar o layout.
6. **Biologia** — o texto diz "conhece biologia"; confirmar formação/estudo real.
7. **O próximo capítulo** — a formulação do projeto do restaurante de brasilidades (público, propósito, termos). O projeto ainda não tem nome — nada foi batizado.

## Fatos documentados (recortes fornecidos pela família + fontes públicas)

- **Nome completo**: João Carlos Graf Accioli Jourdan (certificado World Class, 2012).
- **2001** — Folha Dirigida (1º–7/11/2001, p. 9, foto de Salvador Scofano): "João Carlos Jourdan comemorou unidade da oposição na etapa do Rio" — liderança estudantil secundarista carioca.
- **2005** — Miam Miam inaugura; o rosito "estrela a carta de drinques da casa desde a inauguração" (Rio Show/O Globo, 29/05/2009).
- **2008** — Veja (8/10/2008, p. 117), prêmio "A melhor carta de drinques": "Sob os cuidados da simpática Danni Camilo … e do barman João Jourdan, a esmerada carta de drinques lista 36 opções." Em agosto, lança os **long shots de sagu** (O Globo Zona Sul, 14/08/2008).
- **2009** — Rio Show: mojitos (~30 por noite, três gotas de angostura, "melhores que os de Cuba" segundo o publicitário Flávio Medeiros); Miam Miam bicampeão de "melhor moderno" no Rio Show Gastronomia; a dupla Danni Camilo + João Jourdan assina também a carta do **OuiOui** (revista Oh!/O Globo — cola-daiquiri: melado da fazenda, limão, rum e chips de cola).
- **2012** — Certificado **Programa World Class** (Diageo): etapas de 14–15/05/2012, em São Paulo.
- **2014** — Um dos 8 vencedores nacionais do **Cocktail Journey** (Ketel One + Tanqueray Nº TEN/Diageo) → etapa brasileira do **Diageo World Class** (ciclo 2015).
- Miam Miam: **Bib Gourmand** do Guia Michelin (2015 → guia 2026); 20 anos celebrados em 2025.
- Foursquare/Time Out (dicas de clientes): "a maior parte dos drinques foi criada por ele… ele sabe agradar cada paladar".

Os três PDFs de origem (recortes de imprensa, certificado World Class e páginas de 2001) ficam com a família — não estão no repositório.
