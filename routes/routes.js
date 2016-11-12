import App from '../containers/App';

if (typeof System === 'undefined') {
	var System = {
		import: (m) => {
			return new Promise((resolve,reject)=> {
				resolve(require(m));
			})
		}
	}
}

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => {
		cb(null, module.default);
	}
}

export default {
  component: App,
  childRoutes: [
		{
			path: '/',
			getComponent(location, cb) {
       System.import( "../components/Main").then(loadRoute(cb)).catch(errorLoading);
      }
	 },
	 {
		 path: '/counter',
		 getComponent(location, cb) {
		 	System.import( "../components/Counter").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/stock-tickers',
		 getComponent(location, cb) {
		 	System.import( "../components/StockTickers").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/about-signalr',
		 getComponent(location, cb) {
		 	System.import( "../components/About").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/slides',
		 getComponent(location, cb) {
		 	System.import( "../components/Slides").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/scalability',
		 getComponent(location, cb) {
		 	System.import( "../components/Scalability").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/sqldependency',
		 getComponent(location, cb) {
		 	System.import( "../components/SQLDependency").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/dashboard',
		 getComponent(location, cb) {
		 	System.import( "../components/Dashboard").then(loadRoute(cb)).catch(errorLoading);
		 }
	 }
	]
};
