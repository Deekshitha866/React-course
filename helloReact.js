const heading=React.createElement("div",{},"hello world from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hey i am an h1 element"),
    React.createElement("h2",{},"hey i am an h2 element"),]),

    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"hey i am an h1 element"),
        React.createElement("h2",{},"hey i am an h2 element"),]
    )]);
const head=ReactDOM.createRoot(document.getElementById("root1"));
head.render(parent);