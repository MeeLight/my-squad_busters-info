import { defineConfig } from '@rsbuild/core'

// Plugins
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules'

// Node Utils
import { resolve } from 'node:path'

export default defineConfig({
  html: {
    template: 'index.html',
    outputStructure: 'flat'
  },
  source: {
    entry: {
      index: './src/main.tsx'
    }
  },
  tools: {
    rspack: {
      plugins: []
    }
  },
  plugins: [pluginReact(), pluginTypedCSSModules()],
  resolve: {
    alias: {
      '@core': resolve(__dirname, './src/modules/core'),
      '@icons': resolve(__dirname, './src/modules/core/icons'),
      '@app': resolve(__dirname, './src/modules/app'),
      '@profile': resolve(__dirname, './src/modules/profile')
    }
  },
  security: {
    sri: {
      algorithm: 'sha512',
      enable: 'auto'
    }
  },
  server: {
    compress: true,
    open: false,
    port: 5173,
    historyApiFallback: true,
    publicDir: {
      name: 'public',
      watch: true,
      copyOnBuild: 'auto'
    }
  }
})
