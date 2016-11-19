import App from '../containers/App';

if (typeof System === 'undefined') { // eslint-disable-line no-use-before-define, block-scoped-var
  var System = { // eslint-disable-line no-var, vars-on-top
    import: (m) => {
      return new Promise((resolve)=> {
        resolve(require(m)); // eslint-disable-line import/no-dynamic-require, global-require
      })
    }
  }
}

function errorLoading(err) {
  console.error('Dynamic page loading failed', err, err.stack); // eslint-disable-line no-console
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
      path: '/basic-shapes',
      getComponent(location, cb) {
        System.import( "../components/BasicShapes").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-arrays',
      getComponent(location, cb) {
        System.import( "../components/D3APIArrays").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-collections',
      getComponent(location, cb) {
        System.import( "../components/D3APICollections").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-colors',
      getComponent(location, cb) {
        System.import( "../components/D3APIColors").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-hierarchies',
      getComponent(location, cb) {
        System.import( "../components/D3APIHierarchies").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-random',
      getComponent(location, cb) {
        System.import( "../components/D3APIRandom").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-scales',
      getComponent(location, cb) {
        System.import( "../components/D3APIScales").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-axis',
      getComponent(location, cb) {
        System.import( "../components/D3APIAxis").then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/api-requests',
      getComponent(location, cb) {
        System.import( "../components/D3APIRequests").then(loadRoute(cb)).catch(errorLoading);
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
          path: '/slides/the-force2',
          getComponent(location, cb) {
            System.import( "../components/SlideForce2").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/graphs',
          getComponent(location, cb) {
            System.import( "../components/SlideGraph").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/arrays',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIArrays").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/collections',
          getComponent(location, cb) {
            System.import( "../components/SlideAPICollections").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/hierarchies',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIHierarchies").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/random',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIRandom").then(loadRoute(cb)).catch(errorLoading);
          }
        },

        {
          path: '/slides/axis',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIAxis").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/scales',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIScales").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/colors',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIColors").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/requests',
          getComponent(location, cb) {
            System.import( "../components/SlideAPIRequests").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/next',
          getComponent(location, cb) {
            System.import( "../components/SlideNext").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/shire',
          getComponent(location, cb) {
            System.import( "../components/SlideShire").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/excel',
          getComponent(location, cb) {
            System.import( "../components/SlideExcel").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/gandalf',
          getComponent(location, cb) {
            System.import( "../components/SlideGandalf").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/magic',
          getComponent(location, cb) {
            System.import( "../components/SlideMagic").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/table-tables',
          getComponent(location, cb) {
            System.import( "../components/SlideTableTables").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/matrix',
          getComponent(location, cb) {
            System.import( "../components/SlideMatrix").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/dragons',
          getComponent(location, cb) {
            System.import( "../components/SlideDragons").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/tweet',
          getComponent(location, cb) {
            System.import( "../components/SlideTweet").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/examples',
          getComponent(location, cb) {
            System.import( "../components/SlideExamples").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/tables',
          getComponent(location, cb) {
            System.import( "../components/SlideTables").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/no-tables',
          getComponent(location, cb) {
            System.import( "../components/SlideNoTables").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/save-the-date',
          getComponent(location, cb) {
            System.import( "../components/SlideSaveTheDate").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/qa',
          getComponent(location, cb) {
            System.import( "../components/SlideQA").then(loadRoute(cb)).catch(errorLoading);
          }
        },
        {
          path: '/slides/thankyou',
          getComponent(location, cb) {
            System.import( "../components/SlideThankYou").then(loadRoute(cb)).catch(errorLoading);
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
      path: '/force2',
      getComponent(location, cb) {
        System.import( "../components/D3Force2").then(loadRoute(cb)).catch(errorLoading);
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
