import Controller from './contorller'

export const AppRoutes = (routes: any) => {
    routes.get('/test', Controller.testApi)

    routes.get('/list-user', Controller.listUser)
    routes.post('/create-user', Controller.createUser)

    routes.post('/login-chat', Controller.loginChat)
    
    return routes
}