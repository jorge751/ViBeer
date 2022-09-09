
//
//	Renderiza botones para edición de categoría
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { alertaToast } from '../../funciones';
import { hayErroresForm, itemWithForm } from '../funAdmin';
import { actualizaItem } from '../../api/db';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function EdicionBotones({ itemForm }) {

	//	Navegador para ir a consulta
	const navegar = useNavigate();

	//	Ejecuta grabación
	const runActualizar = () => {

		//	Decide ejecución
		if (hayErroresForm(itemForm)) {
			alertaToast('Información faltante o errónea.');
		} else {
			actualizaItem('categorias', itemForm.id.valor, itemWithForm(itemForm))
				.then(() => {
					navegar('/admin_consulta_categoria/' + itemForm.id.valor,
						{ state: { msjToast: 'Actualización exitosa !!!' } }
					);
				})
		};
	};

	//	Render !!!
	return (
		<>
		<Button size='md' className='w-25 me-5' onClick={runActualizar}>
			Actualizar
		</Button>
		<Link to='/admin_lista_categorias'>
			<Button size='md' className='w-25'>
				Cancelar
			</Button>
		</Link>
		</>
	);
};
