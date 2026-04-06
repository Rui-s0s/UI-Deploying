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
    Routes -- "/one" --> One
    Routes -- "/two" --> Two
    Routes -- "/three" --> Three
    
    %% Three Layout specifics
    Three --> PostCardComp
    Three --> CSS_Three
    
    %% Components and Types
    PostCardComp -.-> Types
    Three -.-> Types
    Routes -.-> Types
    
    %% Other Styles
    Home --> CSS_Home
    One --> CSS_One
    Two --> CSS_Two
```

### Key Relationships

- **Entry Point**: `src/index.tsx` initializes the application.
- **Routing**: `src/routes/routes.tsx` handles URL mapping to different layout components.
- **Layouts**: Each page (Home, One, Two, Three) has its own layout file and dedicated CSS file in `public/css/`.
- **Page Three**: Specifically uses the `ParagraphPostCard` component (defined in `PostCard.tsx`) to display posts according to the site's maroon aesthetic.
- **Data Types**: `src/types.ts` defines the `Post` and `Comment` interfaces used throughout the application to ensure data consistency.
