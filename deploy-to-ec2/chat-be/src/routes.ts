import Controller from './contorller'

export const AppRoutes = (routes: any) => {
    routes.get('/test', Controller.testApi)

    routes.get('/list-user', Controller.listUser)
    routes.post('/create-user', Controller.createUser)

    routes.post('/login-chat', Controller.loginChat)

    routes.post('/get-message-list-by-user', Controller.getMessageHistory)
    routes.post('/send-message', Controller.postMessage)
    
    return routes
}