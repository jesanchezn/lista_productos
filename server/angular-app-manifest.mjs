
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/jesanchezn/lista_productos',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/jesanchezn/lista_productos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 483, hash: '3293c654e45710a4fcbb906e9afac50016bd2494bcebe3367ee7a7c54c63499e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '9e2c69e19809b1abdfaa068e82a3cc296616788eecc87c58e1d8168a41e52cd6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4795, hash: '1f358cfeeb091c8ed228b04f42ace9559397a6ddc4799c9f9d9b8cc4b493ba81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
