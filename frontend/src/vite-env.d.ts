/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Full base URL of the backend API, e.g. https://airbnb-clone-gz4j.onrender.com/api
   * Leave unset in local dev — the Vite proxy (vite.config.ts) handles /api locally.
   */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
