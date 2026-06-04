
import licenses from '../../data/licenses.json';

export default eventHandler((event) => {
    const id = event.context.params?.id;

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "La id de producto se necesita"
        });
    }

    const license = licenses.find(l => l.id === Number(id))

    if (!license) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Licencia no encontrada'
        })
    }


    const index = licenses.findIndex(l => l.id === Number(id))

    if (index === -1) {
        throw createError({ statusCode: 404, statusMessage: 'Licencia no encontrada' })
    }



    licenses.splice(index, 1)


    return licenses;
})