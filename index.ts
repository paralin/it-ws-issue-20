import { duplex } from 'it-ws'

console.log('Importing duplex imports events which is not available in the browser.')
console.log('Building this with esbuild causes a compilation error.')
console.log('Use npm run build')
duplex(new WebSocket())
