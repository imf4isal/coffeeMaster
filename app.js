import { loadData } from './service/Menu.js';
import Router from './service/Router.js';
import Store from './service/Store.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
  console.log('ready');
});
