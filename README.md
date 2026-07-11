# BBS TV Productions — Website Institucional

> Site institucional em estilo editorial/jornalístico preto e branco para a **BBS TV Productions**, produtora audiovisual britânico-brasileira, parte do **BBS Group Idiomas LTDA.**

---

## Sobre o projeto

Este repositório contém o código-fonte do site de apresentação da BBS TV Productions. O design segue uma estética de **jornal clássico** (masthead, manchetes, capitular, letreiro, regras tipográficas) com paleta **preto e branco** e bandeiras coloridas como únicos elementos cromáticos.

O conteúdo está disponível em quatro idiomas editados manualmente:

- **PT** — Português (Brasil)
- **EN** — English (UK)
- **ES** — Español
- **IT** — Italiano

Além disso, o seletor de idiomas permite redirecionar para qualquer outro idioma do mundo via Google Translate.

---

## Stack tecnológica

| Camada | Tecnologia |
| --- | --- |
| Framework full-stack | [TanStack Start](https://tanstack.com/start) v1 (React 19 + SSR/SSG) |
| Build tool | [Vite](https://vitejs.dev/) 8 |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) v4 via `@import` nativo |
| Fontes | Google Fonts: Playfair Display, Inter, JetBrains Mono |
| Ícones | Lucide React |
| UI base | shadcn/ui (configuração `new-york`, sem RSC) |
| Type checking | TypeScript 5 (strict) |
| Lint/Format | ESLint + Prettier |

> A configuração do Vite usa o pacote `@lovable.dev/vite-tanstack-config`, que já inclui os plugins essenciais do TanStack Start, Tailwind, path aliases e o entry server. Após inicializar a estrutura e design do projeto com a ferramenta *Lovable*, **O conteúdo foi editado manualmente** para ataptar preferências do cliente.

---

## Estrutura de diretórios

```text
.
├── src/
│   ├── assets/                 # Imagens dos patrocinadores (assets gerenciados)
│   │   ├── dombosco-1.jpg.asset.json
│   │   ├── dombosco-2.jpg.asset.json
│   │   ├── skilled-1.jpg.asset.json
│   │   └── skilled-2.jpg.asset.json
│   ├── components/             # Componentes reutilizáveis (shadcn/ui e custom)
│   ├── hooks/                  # Hooks customizados (ex: use-mobile)
│   ├── lib/                    # Utilitários e helpers
│   │   ├── utils.ts
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   └── lovable-error-reporting.ts
│   ├── routes/                 # Rotas do TanStack Start (file-based routing)
│   │   ├── __root.tsx          # Layout raiz: <html>, <head>, providers
│   │   ├── index.tsx           # Página inicial (home)
│   │   └── README.md           # Convenções de rotas
│   ├── router.tsx              # Configuração do roteador + QueryClient
│   ├── server.ts               # Entry server SSR (wrapper de erros)
│   ├── start.ts                # Middlewares do TanStack Start
│   └── styles.css              # Tokens de design, fontes, animações e utilitários
├── .lovable/
│   └── project.json            # Metadados do projeto Lovable
├── components.json             # Configuração do shadcn/ui
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── .prettierrc / .prettierignore
└── README.md                   # Este arquivo
```

### Pontos importantes da estrutura

- **`src/routes/__root.tsx`** — Shell raiz. Define `<html>`, `<head>`, meta tags (SEO), carregamento de fontes e favicon. Também envolve a aplicação com `QueryClientProvider`.
- **`src/routes/index.tsx`** — Página principal. Contém todo o conteúdo editorial, seletor de idiomas, bandeiras SVG, seção de parceiros, transmissões e rodapé.
- **`src/router.tsx`** — Cria o roteador do TanStack Router com `routeTree` gerado automaticamente.
- **`src/styles.css`** — Define o tema "papel e tinta": cores `oklch`, fontes, utilitários como `.drop-cap`, `.eyebrow`, `.rule-t`, `.marquee-track` e animações.
- **`src/assets/*.asset.json`** — Referências gerenciadas às imagens dos patrocinadores (Dom Bosco e Skill Idiomas).

> **Não crie `src/pages/`** — este projeto usa file-based routing do TanStack Start. Rotas são arquivos dentro de `src/routes/`.

---

## Funcionalidades

### 1. Design editorial jornalístico

- **Masthead** clássico com edição, data, localização e volume.
- **Manchete principal** com kicker, lede e standfirst.
- **Capitular** (`drop-cap`) na abertura do editorial.
- **Letreiro animado** (`marquee`) com localizações e parceiros.
- **Regras tipográficas** (bordas finas e duplas) separando seções.
- **Indicador "No ar agora"** com ponto piscante.

### 2. Multilíngue (i18n)

- Objeto `CONTENT` centralizado em `src/routes/index.tsx` com traduções para PT, EN, ES e IT.
- Seletor de idiomas via bandeiras coloridas (BR, UK, ES, IT) na barra superior.
- Bandeiras inativas ficam em escala de cinza e ganham cor no hover/foco.
- Qualquer idioma do mundo pode ser acessado via redirecionamento para o Google Translate.

### 3. Parceiros e patrocinadores

- Seção **Parcerias** com espaço reservado para o futuro logo da emissora de TV.
- Logos dos patrocinadores alternam continuamente com efeito de cross-fade:
  - **Dom Bosco**: alterna entre `dombosco-1` e `dombosco-2`.
  - **Skill Idiomas**: alterna entre `skilled-1` e `skilled-2`.

### 4. Transmissões de vídeo (Broadcast)

- Seção reservada para embeds do YouTube.
- Slots prontos para receber `iframe` com links de programas.
- Mensagem de "espaço reservado" enquanto não houver vídeos plugados.

### 5. SEO e metadados

- Título e descrição configurados no `head()` de `__root.tsx`.
- Meta tags Open Graph (`og:title`, `og:description`, `og:type`) e Twitter Card.
- Viewport responsivo e charset UTF-8.

---

## Como rodar localmente

### Pré-requisitos

- [Bun](https://bun.sh/) (recomendado) ou Node.js 20+

### Instalação

```bash
bun install
```

### Desenvolvimento

```bash
bun run dev
```

O servidor Vite inicia em `http://localhost:8080`.

### Build de produção

```bash
bun run build
```

### Preview da build

```bash
bun run preview
```

### Lint e formatação

```bash
bun run lint
bun run format
```

---

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `dev` | Servidor de desenvolvimento com HMR |
| `build` | Build otimizado para produção |
| `build:dev` | Build em modo desenvolvimento |
| `preview` | Servir a build localmente |
| `lint` | Executar ESLint |
| `format` | Formatar código com Prettier |

---

## Personalização

### Adicionar um novo idioma editado manualmente

1. Adicione o código ao tipo `Lang` em `src/routes/index.tsx`.
2. Crie a função SVG da bandeira (ex: `FlagFR`).
3. Adicione a entrada em `LANG_META`.
4. Adicione todo o conteúdo traduzido ao objeto `CONTENT`.
5. Atualize a ordem das bandeiras na `LangBar`.

### Inserir vídeos do YouTube

Na seção **Transmissões**, substitua os `iframe` placeholders por embeds reais:

```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Nome do programa"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Trocar imagens dos patrocinadores

Substitua os arquivos em `src/assets/` mantendo os nomes ou atualize as importações em `src/routes/index.tsx`.

---

## Site Publicado em Domínio Próprio
É possível encontrar a página feita com esse código exclusivamente pelo site [BBS TV PRODUCTIONS](https://www.bbstelevision.com.br/)

## Créditos e endereço

**BBS Group Idiomas LTDA.**  
Rua Heitor Liberato, 1220 · São João · Itajaí — Santa Catarina · CEP 88304-101

Presença em: Santa Catarina · Maranhão · Londres

**Magic Soluções em TI**
[Paulo Anderson Gonçalves de Lima](https://github.com/Pucapuka)
Engenheiro de Software e Desenvolvedor Web FullStack.
---

## Licença

© 2026 BBS TV Productions / BBS Group Idiomas LTDA. Todos os direitos reservados.