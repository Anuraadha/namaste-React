const parent = React.createElement("div", { id: "parent" }, React.createElement("div",
    { id: "child" },
    [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am again h1 tag")])
)

console.log(parent)
const heading = React.createElement("h1", { id: "heading" }, "Hello world!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);