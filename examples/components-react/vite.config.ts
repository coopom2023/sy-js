import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const sharedArrayBufferHeaders = {
  'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
}
const proxyConfigure = (proxy) => {
  proxy.on('proxyRes', (proxyRes, req, res) => {
    console.log(req.url)
    for (const h in proxyRes.headers) {
      res.setHeader(h, proxyRes.headers[h])
    }
    for (const k in sharedArrayBufferHeaders) {
      res.setHeader(k, sharedArrayBufferHeaders[k])
    }
    proxyRes.pipe(res)
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // 本地cesium库
    // 'CESIUM_BASE_URL': JSON.stringify('/lib/Cesium'),
    // 代理网络cesium库
    'CESIUM_BASE_URL': JSON.stringify('/Build/Cesium'),
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    headers: {
      // SSmap 必须设置跨域头，否则无法使用 SharedArrayBuffer
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
      ...sharedArrayBufferHeaders,
    },
    proxy: {
      // ssmap遥感影像图代理
      '/data/dom': {
        target: 'https://examples.dataarche.com',
        changeOrigin: true,
      },
      '/data/dayanta': {
        target: 'https://examples.dataarche.com',
        changeOrigin: true,
      },
      '/sdkcode': {
        target: 'https://examples.dataarche.com',
        changeOrigin: true,
      },
      // 天地图代理，ssmap共存下需要代理，否则出现 same-origin 问题, http://t{0-7}.tianditu.gov.cn
      '/vec_c/wmts': {
        target: 'http://t1.tianditu.com',
        changeOrigin: true,
      },
      '/cva_c/wmts': {
        target: 'http://t1.tianditu.com',
        changeOrigin: true,
      },
      '/img_w/wmts': {
        target: 'http://t0.tianditu.gov.cn',
        changeOrigin: true,
      },
      '/DataServer': {
        target: 'http://t0.tianditu.gov.cn',
        changeOrigin: true,
      },
      // cesium 静态cdn资源
      '/Build/Cesium': {
        target: 'https://unpkg.com/cesium@1.107.2/',
        changeOrigin: true,
        selfHandleResponse: true,
        configure: proxyConfigure,
      },
    },
  }
})
