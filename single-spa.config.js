import { registerApplication, start } from 'single-spa'

registerApplication(
    'lista',
    () => import('./packages/lista'),
    location => location.pathname === '/lista'
)

registerApplication(
    'vuezinho',
    () => import('./packages/vuezinho'),
    location => location.pathname === '/vuezinho'
)

start()