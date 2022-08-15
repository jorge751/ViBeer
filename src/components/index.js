
//
//	Componentes generales
//

//	Navegación, carrito y pie
import Navbar from './Navbar';
import WidgetCarrito from './WidgetCarrito';
import Footer from './Footer';

//	Páginas básicas
import Home from './Home';

//	Renderiza items
import ItemListContainer from './ItemListContainer';
import ItemList from './ItemList';
import Item from './Item';
import ItemDetailCounter from './ItemDetailCounter';
import AgregarAlCarrito from './AgregarAlCarrito';

//	Producto
import ItemDetailContainer from './ItemDetailContainer';

//	Carrito de compra
import ContextCarrito, { useContextCarrito } from './ContextCarrito';
import Carrito from './Carrito';

export {
	Navbar, WidgetCarrito, Footer,
	Home,
	ItemListContainer, ItemList, Item, ItemDetailCounter, AgregarAlCarrito,
	ItemDetailContainer,
	ContextCarrito, useContextCarrito, Carrito
};
