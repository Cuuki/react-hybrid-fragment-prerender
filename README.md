# React Fragment Prerender

Server render React components into strings and populate with data from any source. Server string will be put into a fragment file with separate hydration script bundled with `esbuild`. Client only has to include the hydration script for the fragment (`client/out/fragment/**`) as well as the html (example include with `vite-handlebars-plugin`) which already includes the root element of the component for the hydration call (`hydrateRoot`).
