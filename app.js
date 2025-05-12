//    const heading = React.createElement("h1",{id:"heading",abc:"xys"},"hey hi react inside it");

const { Children } = require("react");

//      const root = ReactDOM.createRoot(document.getElementById("root"));
    
//      root.render(heading);
    

// nested strcture 

// const parent = React.createElement("div",
// {id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"i am an H1 tag")));
 const parent = React.createElement(
      "div",
      { id: "parent" },
      [
        React.createElement("div", { id: "child1" }, [
          React.createElement("h1", {}, "I am an H1 tag"),
          React.createElement("h2", {}, "I am an H1 tag"),
          React.createElement("h3", {}, "I am an H1 tag"),
        ]),
        React.createElement("div", { id: "child2" }, [
          React.createElement("h1", {}, "I am an H1 tag"),
          React.createElement("h2", {}, "I am an H1 tag"),
        ]),
      ]
    );
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);