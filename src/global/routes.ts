export interface MenuItem {
  name: string;
  url: string;
  icon?: string;
  open?: boolean;
  children?: MenuItem[];
  routeComponent: string;
}
export const menuItems: MenuItem[] = [
  {
    name: 'Home',
    url: '/',
    routeComponent: 'app-home',
  },
  {
    name: 'Page 1',
    url: 'app-page-1',
    routeComponent: 'app-page-1',
    children: [
      {
        name: 'Page 2',
        routeComponent: 'app-page-2',
        url: 'app-page-1/app-page-2',
        children: [
          {
            name: 'Page 3',
            routeComponent: 'app-page-3',
            url: 'app-page-1/app-page-2/app-page-3',
          },
        ],
      },
    ],
  },
];

export let menuRoutes = [];

function addMenuRoutes(menuItems = []) {
  menuItems.forEach(({ name, url, routeComponent, children }) => {
    menuRoutes.push({ name, url, routeComponent });
    if (children) {
      addMenuRoutes(children);
    }
  });
}
addMenuRoutes(menuItems)