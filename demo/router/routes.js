/**
 * App routes
 * all react components relevant for router are imported
 */

import {
  Home, Button, ErrorPage
} from '../pages';

/**
 * Routes
 * @param {Array} route: Array of objects
 * @param {String} route.path: use in Route component of react-router-dom
 * @param {String} route.type: used to decide what router prop to use
 * @param {String} route.label: used to create Link, if not provided item is not used as link
 * @param {Object} route.component: reference to React component to load
 * @param {Object} route.props: props to spread in Route component of react-router-dom
 */
const routes=[
  { path:'/', component: Home , label:"Home", type:"component", props:{ exact:true }, link:{ exact:true }},
  { path:'/button', component: Button , label:"Button", type:"component", props:{ exact:true }, link:{ exact:true }},
  { path:'/error/:id', component: ErrorPage, props:{ exact:true }, type:"component"},
  { path:'', to:"/error/404", type:"redirect"}
]

export default routes;