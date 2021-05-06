function createRouter(options) {
  // 创建 router 对象

  const router = {

    // 当前路径

    currentRoute,

    addRoute,

    removeRoute,

    hasRoute,

    getRoutes,

    resolve,

    options,

    push,

    replace,

    go,

    back: () => go(-1),

    forward: () => go(1),

    beforeEach: beforeGuards.add,

    beforeResolve: beforeResolveGuards.add,

    afterEach: afterGuards.add,

    onError: errorHandlers.add,

    isReady,
  }

  return router

}




const START_LOCATION_NORMALIZED = {
  path: '/',
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined
}
