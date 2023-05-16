declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
    readonly PORT: string;
    readonly CORS_ORIGIN: string;
    readonly DB_USER: string;
    readonly DB_PASSWORD: string;
    readonly DB : string;
    readonly DB_HOST: string;
    readonly DB_PORT: string;
  }
}
