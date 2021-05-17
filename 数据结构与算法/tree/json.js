//深度优先遍历

const json = {
    a: { power: "editor", b: { power: "people", c: { d: { power: 123 } } } },
    power: "admin"
}


const dfs = (json) => {
    if (json) {
        console.log(json);
    }
    if (typeof json === "string") return;
    Object.keys(json).forEach(k => {
        dfs(json[k]);
    });
};

dfs(json)



