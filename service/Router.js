const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();

        // const url = a.href; // property, have access bcz of closure
        const url = event.target.getAttribute('href');
        Router.go(url);
      });

      // Event handler for URL changes
      window.addEventListener('popstate', (event) => {
        Router.go(event.state.route, false);
      });

      // check the initial URL
      Router.go(location.pathname);
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;

    switch (route) {
      case '/':
        pageElement = document.createElement('menu-page');
        break;
      case '/order':
        pageElement = document.createElement('order-page');
        break;
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('details-page');
          pageElement.textContent = 'Details';
          const paramId = route.substring(route.lastIndexOf('-') + 1);
          pageElement.dataset.productId = paramId;
        }
        break;
    }

    if (pageElement) {
      document.querySelector('main').innerHTML = '';
      document.querySelector('main').appendChild(pageElement);
    }

    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
