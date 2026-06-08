export default defineNuxtRouteMiddleware((to, from) => {

    /** Redireccion a lógin en caso de no estar en un carpeta publica */
    const user = useSupabaseUser()

    const publicPath = ['/auth/login', '/auth/register', '/test']

    if (!user.value && !publicPath.some(path => to.path.startsWith(path)) ) {
    return navigateTo('/auth/login')
  }
})
