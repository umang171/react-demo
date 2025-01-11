function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const key in reactElement.props) {
        if (key=='children') continue;
            domElement.setAttribute(key, reactElement.props[key]);
    }
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    mainContainer.appendChild(domElement);
}
const reactElement={
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank'
    },
    children:'Click to open here'
}
const mainContainer=document.getElementById("root");
customRender(reactElement,mainContainer);