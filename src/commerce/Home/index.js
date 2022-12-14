
//
//	Home con carrusel y formulario de contacto
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import brewtiful from '../../../src/assets/img/brewtiful.png'
import Carrusel from './Carrusel';

//	CSS !!!
import './index.css'

//	Default !!!
export default function Home() {
	
	//	Render !!!
	return (
		<div className='div-home'>
			<div className='container px-3 py-5 div-home'>
				<div className='row'>
					<div className='col-7'>
						<h1>
							Delivery de cervezas para todos los gustos.
						</h1>
						<br/><br/>
						<p>
							Somos una cervecería que quiere disfrutar la vida con vos. Tenemos
							artesanales o industriales, livianas o cremosas.
						</p>
						<p>
							Ponnos a prueba y te aseguramos que vas a encontrar la que te gusta.
						</p>
						<p>
							Estamos emocionados por compartir la euforia de ese primer
							trago de un nuevo sabor.
						</p>
						<br/><br/>

						<a href='/todas'>
							<div className='col-6 btn div-ver-todas'>
								Ver todas nuestras cervezas
							</div>
						</a>

					</div>
					<div className='col-3 px-2 color-dark-glass-animate'>

						<img
							src={brewtiful}
							width='370px'
							className='beer-glass-img'
							alt={'xxx'}
						/>

					</div>
				</div>
				<div className='row'>
					<div className='col mx-4 my-5'>

						<Carrusel />

					</div>
				</div>
			</div>
		</div>
 	);

};
