import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repositoryName?.endsWith('.github.io') ?? false;
const base = process.env.BASE_PATH ?? (repositoryName && !isUserSite ? `/${repositoryName}` : '');
const site = process.env.SITE_URL ?? (
  repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io`
    : 'http://localhost:4321'
);

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
