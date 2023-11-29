import { loadData } from './service/Menu.js';
import Router from './service/Router.js';
import Store from './service/Store.js';

// import './components/CartItem.js';
import './components/DetailsPage.js';
import './components/MenuPage.js';
import './components/OrderPage.js';
import './components/ProductItem.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
  console.log('ready');
});

window.addEventListener('appcartchange', (event) => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
