//深度优先遍历

const json = {
    a: { power: "editor", b: { power: "people", c: { d: { power: 123 } } } },
    power: "admin"
}


const dfs = (n) => {
    if (n) {
        console.log(n);
    }

    if (typeof n === "string") return;


    Object.keys(n).forEach(k => {

        dfs(n[k]);
    });
};

dfs(json)



