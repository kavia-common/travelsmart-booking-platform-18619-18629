This folder hosts static assets (images, icons, etc.) that should be referenced with absolute paths like `/assets/hero-travel.png`.

Notes:
- Do not import from `src` for static images; place images here.
- Avoid binary writes in code automation; copy images via shell cp into this directory if provided as attachments.
- Example usage in components:
  <img src="/assets/hero-travel.png" alt="Travel" />
