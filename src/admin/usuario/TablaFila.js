
//
//	Renderiza fila de tabla de usuarios
//

import React from 'react';
import '../index.css';

function TablaFila({ item, borrarItem }) {

	return (
		<tr className='text-white'>
			<td title={item.id}>
				{item.id}
			</td>
			<td>
				{item.nombre}
			</td>
			<td>
				{item.mail}
			</td>

			<td className='text-end'>
				<button
					title = 'Editar'
					onClick = {() => {}}
				><i className='fas fa-pen'></i></button>
				{' '}
				<button
					title = 'Borrar'
					onClick = {() => {borrarItem(item.id)}}
				><i className='fas fa-trash'></i></button>
			</td>

		</tr>
	);
};

export default TablaFila;
