/**
 * Endpoint para obtener 1 licencia especifica
 */
import licenses from '../../data/licenses.json';

export default eventHandler ((event) => {
    /** Obtenemos id */
    const id = event.context.params?.id;

     if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "La id de producto se necesita"
        });
    }

    const license = licenses.find(l => l.id === Number(id));

     if (!license) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Licencia no encontrada'
        })
    }


    return license;
})