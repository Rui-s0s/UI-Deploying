# Project Architecture & Connections

This diagram illustrates how the different parts of the project connect, from the entry point to the layouts and styles.

```mermaid
graph TD
    subgraph Entry
        Index["src/index.tsx"]
    end

    subgraph Routing
        Routes["src/routes/routes.tsx"]
    end

    subgraph Layouts
        Home["src/layouts/home.tsx"]
        One["src/layouts/one.tsx"]
        Two["src/layouts/two.tsx"]
        Three["src/layouts/three.tsx"]
    end

    subgraph Components
        PostCardComp["src/components/PostCard.tsx"]
    end

    subgraph Styling
        CSS_Home["public/css/home.css"]
        CSS_One["public/css/one.css"]
        CSS_Two["public/css/two.css"]
        CSS_Three["public/css/three.css"]
    end

    subgraph Data
        Types["src/types.ts"]
    end

    %% Connections
    Index --> Routes
    
    Routes -- "/" --> Home
    Routes -- "/faq" --> One
    Routes -- "/home" --> Two
    Routes -- "/mk" --> Three
    
    %% Layout specifics
    Three --> PostCardComp
    Three --> CSS_Three
    Home --> CSS_Home
    One --> CSS_One
    Two --> CSS_Two
    
    %% Data and Types
    PostCardComp -.-> Types
    Three -.-> Types
    Routes -.-> Types
```

### How to View This Diagram

You can visualize this Mermaid diagram in several ways:

1.  **VS Code:** Install the **"Markdown Preview Mermaid Support"** extension. Then, open this file and press `Ctrl+Shift+V` to see the rendered graph.
2.  **GitHub:** GitHub natively renders Mermaid blocks in `.md` files. Just push this file to a repository to see it.
3.  **Mermaid Live Editor:** Copy the code block above and paste it into [Mermaid.live](https://mermaid.live/).

### Key Relationships

- **Entry Point**: `src/index.tsx` initializes the Hono application.
- **Routing**: `src/routes/routes.tsx` handles URL mapping to different layout components.
- **Layouts**: Each page has a dedicated layout file. Page **Two** is optimized for high performance (Semantic HTML + LCP optimizations), while Page **Three** (`/mk`) handles the dynamic filtering of trade posts.
- **Post Components**: `src/components/PostCard.tsx` is the reusable unit for displaying trade professionals.
