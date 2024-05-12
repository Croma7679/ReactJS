function customRender(reactElement,container){
   /* const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   domElement.setAttribute('href',reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)*/ //Commenting coz here we are writing line for every attribute,so here we use for loop
   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   for(const prop in reactElement.props){
    if(prop==='children')continue;

    domElement.setAttribute(prop,reactElement.props[prop])
   }
  
   container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children:'Click to visit google'

}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

/*
type:

This property represents the type of the React element. In this case, it's 'a', which typically corresponds to an anchor (<a>) HTML element.
When rendering this React element, React will create an <a> element.

props:

This property contains an object representing the properties (or props) of the React element.
In this case, the href property is set to 'https://google.com', which specifies the URL the anchor element should navigate to.
The target property is set to '_blank', which specifies that the link should open in a new tab or window.
These props will be applied to the corresponding HTML attributes when the React element is rendered.
children:

This property represents the children of the React element.
In this case, it's a string 'Click to visit google', which will be the text content of the anchor element.
So, when this reactElement is rendered using React, it would generate HTML similar to the following:

html
Copy code
<a href="https://google.com" target="_blank">Click to visit google</a>
This HTML code would create a clickable link that, when clicked, opens https://google.com in a new tab or window.*/