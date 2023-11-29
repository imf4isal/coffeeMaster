const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();

        // const url = a.href; // property, have access bcz of closure
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
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
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Order';
        break;
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('h1');
          pageElement.textContent = 'Details';
          pageElement.dataset.productId = route.substring(
            route.lastIndexOf('-') + 1
          );
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
