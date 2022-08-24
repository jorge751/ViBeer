
//
//	Renderiza fila de tabla de producto
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
			<td className='text-end'>
				$ {item.precio}
			</td>
			<td className='text-end'>
				{item.stock}
			</td>
			<td>
				{item.id_categoria}
			</td>
			<td>
				{item.categoria}
			</td>
			<td title={item.imagen}>
				{item.imagen}
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
