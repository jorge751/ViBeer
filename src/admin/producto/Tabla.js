
//
//	Renderiza tabla de productos
//

import React from 'react';

//	Hoock q actualiza la lista desde el servidor
import { useCollection } from 'react-firebase-hooks/firestore';

//	Acceso a DB
import { db, collection } from '../../api/conexion';
import { borrarDoc } from '../../api/db'

//	Tabla de bootstrap
import Table from 'react-bootstrap/Table';
import '../index.css';

//  Fila de la tabla
import TablaFila from './TablaFila';

function Tabla() {

	//	Nombre de colección
	const coleccion = 'productos';

	//	Hoock de actualización
	const [items] = useCollection(collection(db, coleccion));

	//	Función de borrado
	const borrarItem = (id) => {
		borrarDoc(coleccion, id)
	}

	return (
		<Table id='tabla-items' className='text-white'>

			<thead>
				<tr>
					<th>Id</th>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Stock</th>
					<th>Id categoría</th>
					<th>Categoría</th>
					<th>URL imagen</th>
				</tr>
			</thead>

			<tbody>
				{items && items.docs
					.map((i) => ({ id: i.id, ...i.data() }))
                	.map((i) => (				
						<TablaFila
							key={i.id}
							item={i}
							borrarItem={borrarItem}
						/>
					)
				)}
			</tbody>

		</Table>
	);
};

export default Tabla;
