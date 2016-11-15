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
  console.error('Dynamic page loading failed', err, err.stack);
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
		},
		 childRoutes: [
		 		{
		 			path: '/slides/shapes',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideShapes").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/d3-selection',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideSelection1").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/d3-selection-data-binding',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideBinding").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/the-force',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideForce1").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/next',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideNext").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/tweet',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideTweet").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/topic',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideTopic").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	},
				{
		 			path: '/slides/cover',
		 			getComponent(location, cb) {
		        System.import( "../components/SlideCover").then(loadRoute(cb)).catch(errorLoading);
	       	}
		 	 	}
	 	 ]
	 },
	 {
		 path: '/d3-selection-data-binding',
		 getComponent(location, cb) {
		 	System.import( "../components/D3Selection2").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/d3-selection',
		 getComponent(location, cb) {
		 	System.import( "../components/D3Selection").then(loadRoute(cb)).catch(errorLoading);
		 }
	 },
	 {
		 path: '/force1',
		 getComponent(location, cb) {
		 	System.import( "../components/D3Force1").then(loadRoute(cb)).catch(errorLoading);
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
