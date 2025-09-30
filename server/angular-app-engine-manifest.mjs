
export default {
  basePath: 'https://github.com/jesanchezn/lista_productos',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
