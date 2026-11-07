import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/naz-portfolio/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        skills: resolve(__dirname, 'skills.html'),
        journey: resolve(__dirname, 'journey.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
