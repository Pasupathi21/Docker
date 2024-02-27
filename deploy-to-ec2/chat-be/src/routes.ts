import Controller from './contorller'

export const AppRoutes = (routes: any) => {
    routes.get('/test', Controller.testApi)
    return routes
}