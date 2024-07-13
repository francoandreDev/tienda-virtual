import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminCartsComponent } from './routes/admin-carts/admin-carts.component';
import { AdminCategoriesComponent } from './routes/admin-categories/admin-categories.component';
import { AdminDashboardComponent } from './routes/admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './routes/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './routes/admin-products/admin-products.component';
import { AdminUsersComponent } from './routes/admin-users/admin-users.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { OrderHistoryComponent } from './routes/order-history/order-history.component';
import { ProductDetailComponent } from './routes/product-detail/product-detail.component';
import { RegisterComponent } from './routes/register/register.component';
import { ShoppingCartComponent } from './routes/shopping-cart/shopping-cart.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';

export const routes: Routes = [
	{ path: 'admin', component: AdminDashboardComponent },
	{ path: 'admin/categorias', component: AdminCategoriesComponent },
	{ path: 'admin/productos', component: AdminProductsComponent },
	{ path: 'admin/usuarios', component: AdminUsersComponent },
	{ path: 'admin/ordenes', component: AdminOrdersComponent },
	{ path: 'admin/carritos', component: AdminCartsComponent },
	{ path: 'carrito', component: ShoppingCartComponent },
	{ path: 'historial', component: OrderHistoryComponent },
	{ path: 'iniciar-sesion', component: LoginComponent },
	{ path: 'crear-cuenta', component: RegisterComponent },
	{ path: 'perfil', component: UserProfileComponent },
	{ path: 'productos', component: HomeComponent },
	{ path: 'productos/:id', component: ProductDetailComponent },
	{ path: '**', redirectTo: 'productos' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
