const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        { val: 3 }
      ]
    }
  ]
}

const dfs = (root) => {
  console.log(root.children.forEach())
  // root.children.forEach(child => {
  //   dfs(child)
  // });
}

dfs(tree)