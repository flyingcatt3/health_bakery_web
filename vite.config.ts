import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      indexPath: path.resolve(__dirname, 'dist/index.html'),

      routes: [
        '/',
        '/products',
        '/health-knowledge',
        '/internal-links',
        '/about-us',
        '/contact-us',
        '/serp-preview',
        '/seo-validation',
      ],

      

      postProcess(renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute
        renderedRoute.html = renderedRoute.html.split(/>[\s]+</gim).join('><')

        if (renderedRoute.route.endsWith('.html')) {
          renderedRoute.outputPath = path.join(
            __dirname,
            'dist',
            renderedRoute.route,
          )
        }

        return renderedRoute
      },

      server: {
        port: 5173,
      },

      renderer: new vitePrerender.PuppeteerRenderer({
        injectProperty: '__PRERENDER_INJECTED',
        inject: {
          foo: 'bar',
        },
        maxConcurrentRoutes: 4,
        renderAfterDocumentEvent: 'prerender-ready',
        renderAfterTime: 500,
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // ← 很重要
      }),
    }),
  ],
  build: {
    target: 'ES2022',
    //minify: false // 暂时关闭压缩看看是否还有错误
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
