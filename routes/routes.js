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
		 path: '/force-directed-graph',
		 getComponent(location, cb) {
		 	System.import( "../components/ForceDirectedGraph").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/stock-tickers',
		 getComponent(location, cb) {
		 	System.import( "../components/StockTickers").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/basic-shapes',
		 getComponent(location, cb) {
		 	System.import( "../components/BasicShapes").then(loadRoute(cb)).catch(errorLoading);
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
		 path: '/webvr',
		 getComponent(location, cb) {
		 	System.import( "../components/WebVR").then(loadRoute(cb)).catch(errorLoading);
		 }
	 }
	]
};
