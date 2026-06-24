# Daniel RV — Portfolio

Portfolio pessoal construído com [Next.js](https://nextjs.org) (App Router) e Tailwind CSS v4.

## Rotas

- **`/`** — portfolio (tema purple/dark), com cursor customizado e scroll reveal.
- **`/mabi`** — landing page do Açougue Mabi. Hospedada aqui temporariamente; deve sair para um projeto próprio no futuro.

## Estrutura

```
app/
  page.tsx          # rota "/" — portfolio
  portfolio.css
  mabi/
    page.tsx        # rota "/mabi" — landing page Açougue Mabi
    mabi.css
    layout.tsx      # metadata específica da rota
public/
  mabi/             # imagens usadas só pela landing page do Mabi
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
