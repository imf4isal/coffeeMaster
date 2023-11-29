import Store from './service/Store.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoad', () => {
  console.log('ready...');
});
