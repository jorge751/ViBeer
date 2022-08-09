
//
//	
//

import './index.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BotonComprar } from '../index';

//	Tarjeta bootstrap
import Card from 'react-bootstrap/Card';

//	Principal
function ItemDetailContainer() {

	//	Lee parámetro
	const idParam = useParams().id;

	//	Item
	const [item, setItem] = useState({});
	const [imagen, setImagen] = useState();
	useEffect(() => {

		//	Lee objeto
		const getItem = async () => {
			const respuesta = await fetch(`/datos.json`,)
			const objJson = await respuesta.json();
			const ArrayDatos = objJson.productos;
			const ret = ArrayDatos.find(
				(objElem) => objElem.id === String(idParam))
			return ret || {};
		};

		getItem()
			.then((item) => {
				setItem(item);
				const imagen = '../img/imagen' + item.id + '.png';
				setImagen(imagen);
			})

	}, []);

    return (
		<div className='row div-item-detail-container'>
			<Card
				id={item.id}
				className='col-4 card-item p-3 mx-5 my-5 rounded strong'
			>
				<div className='row'>
					<div className='col'>
						<Card.Title className='titulo'>{item.nombre}</Card.Title>
						<Card.Img
							className='shadow-lg p-3 mb-2 bg-white rounded strong'
							variant='top'
							src={imagen}
						/>
					</div>
					<div className='col mt-5 mx-5'>
						<Card.Body>
							<Card.Text>{'Precio: $' + item.precio}</Card.Text>
							<Card.Text>{'Stock: '+ item.stock}</Card.Text>
							<Card.Text>{'Categoría: '+ item.categoria}</Card.Text>
						</Card.Body>
						<div>
							<BotonComprar />
						</div>
					</div>
				</div>
			</Card>
		</div>
    );
}

export default ItemDetailContainer;
