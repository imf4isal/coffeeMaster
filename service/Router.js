const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();

        // const url = a.href; // property, have access bcz of closure
        const url = event.target.getAttribute('href');
        Router.go(location.pathname);
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
  },
};

export default Router;
