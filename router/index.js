
import App from './../src/App';
const routes = {
	path: '/',
	component: App,
	childRoutes: [
	  { path: 'about', component: About },
	  { path: 'inbox', component: Inbox },
	]
  }

  export default routes;