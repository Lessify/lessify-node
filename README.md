# Lessify Node

Integration of Lessify API with Node Projects.

````ts
// configuration
export const lessify: Lessify = new Lessify({
  spaceId: 'your-space-id', 
  environment: 'master',
  apiKey: 'your-api-key'
})
//get translations
lessify.translation.get(lang)
//get configurations
lessify.configuration.get()
````

## NPM Publish

`npm init --scope=lessify`
`npm run build`
`npm publish --access public dist`
