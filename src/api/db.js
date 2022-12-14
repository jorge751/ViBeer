
//
//  *****************************************************************
//
//			A C C E S O    A   B A S E   D E   D A T O S
//
//  *****************************************************************
//


//	Framework !!!
import {
	db,
	doc,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	collection,
	query,
	where,
	limit
} from './conexion';


//	Devuelve array de colección
export async function getCollection(col) {
	
	const snapshot = await getDocs(collection(db, col));

	return snapshot.docs.map((snapshotDoc) => {
		return {
			id: snapshotDoc.id,
			...snapshotDoc.data(),
		};
	});
}


//	Devuelve array de colección filtrado por contenido en campo
export async function getCollectionWithContent(
		col, contenido, campo = 'nombre'
	) {
	return (
		getCollection(col)
		.then(items =>
			items.filter(doc =>
				doc[campo].toUpperCase().includes(contenido.toUpperCase())
			)
		)
	);
};


//	Devuelve array de colección con query
export async function getCollectionWithQuery(col, q) {

	const refCol = collection(db, col);
	const queryCollection = query(refCol, where(...q), limit(40));
	const snapshot = await getDocs(queryCollection);

	if (snapshot.size === 0) {
		return [];
	}

	return snapshot.docs.map((snapshotDoc) => {
		return {
			id: snapshotDoc.id,
			...snapshotDoc.data(),
		};
	});
}


//	Devuelve documento con colección y id
export async function getDocument(col, id) {

	const docRef = getRefDoc(col, id);
	const snapshot = await getDoc(docRef);

	if (snapshot.exists()) {
		return { id: snapshot.id, ...snapshot.data() };
	}
	return null;
}


//	Borra colección
export async function borrarColeccion(col) {

	const snapshot = await getDocs(collection(db, col));

	snapshot.docs.forEach((snapshotDoc) => {
		deleteDoc(getRefDoc(col, snapshotDoc.id));
	});
}


//	Borra un documento con colección y id
export async function borrarDoc(col, id) {

	const refDoc = getRefDoc(col, id);

	return await deleteDoc(refDoc);
}


//	Crea un item en la colección
export async function creaItem(col, item) {

	const refCol = collection(db, col);

	return await addDoc(refCol, item);
};


//	Devuelve referencia a documento con colección y id
export function getRefDoc(col, id) {

	return doc(db, col, id);

}


//	Actualiza un item con colección y id
export async function actualizaItem(col, id, item) {

	const refDoc = getRefDoc(col, id);

	return await updateDoc(refDoc, item);

}
