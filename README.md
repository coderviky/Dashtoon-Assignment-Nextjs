## Getting Started

First, get all dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features:

-   Responsive Bottom Navbar using TailwindCss
-   Shows Active Tab using useRouter() nextjs hook (also works in nesting routes)
    Ex. /tab5/newpage => Tab5(active)
-   Shows Home Tab Active when route is other than 4 tabs(used in bottomnavbar)
    Ex. /anypage => Home(active)
