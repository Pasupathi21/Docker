import Controller from './contorller'

export const AppRoutes = (routes: any) => {
    routes.get('/test', Controller.testApi)

    routes.post('create-user', Controller.createUser)
    return routes
}