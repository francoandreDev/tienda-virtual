type RouteKey = 
  | 'products'
  | 'carts'
  | 'orders'
  | 'register'
  | 'login'
  | 'profile'
  | 'home'
  | 'admin'
  | 'admin-categories'
  | 'admin-products'
  | 'admin-users'
  | 'admin-orders'
  | 'admin-carts';

interface RouteInfo {
  route: string;
  name: string;
}

type RouteDictionary = {
  [key in RouteKey]: RouteInfo;
};


export const routesDictionary: RouteDictionary = {
	products: { route: '/productos', name: 'Productos' },
	carts: { route: '/carrito', name: 'Carrito' },
	orders: { route: '/historial', name: 'Historial' },
	register: { route: '/crear-cuenta', name: 'Crear Cuenta' },
	login: { route: '/iniciar-sesion', name: 'Iniciar Sesión' },
	profile: { route: '/perfil', name: 'Perfil' },
	home: { route: '/', name: 'Inicio' },
	admin: { route: '/admin', name: 'Administrador Principal' },
	'admin-categories': {
		route: '/admin/categorias',
		name: 'Administrar Categorias',
	},
	'admin-products': {
		route: '/admin/productos',
		name: 'Administrar Productos',
	},
	'admin-users': { route: '/admin/usuarios', name: 'Administrar Usuarios' },
	'admin-orders': { route: '/admin/ordenes', name: 'Administrar Ordenes' },
	'admin-carts': { route: '/admin/carritos', name: 'Administrar Carritos' },
};
