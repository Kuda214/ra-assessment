import React  from "react";
import { Box } from "./Box";
import ReactDOM from 'react-dom';
import '../index.css';

const footerStyles: React.CSSProperties = {
  width: '100%',
  height: '15%',
  overflow: 'hidden',
  position:'fixed',
  bottom:0,
  padding: '10px',
  marginBottom:"20px",
  // backgroundImage: "url(../public/bl.jpg)",
  // backgroundSize:'cover',
  backgroundColor: '#000',
  textAlign: 'center',
  
};
const footerOptionsStyles: React.CSSProperties = {
    color: '#fff',
    fontSize: '12px',
    paddingLeft: '5%',
    paddingRight: '5%',
    textAlign: 'center',
  };
  
  const optionsStyles: React.CSSProperties = {
    width: '28vw',
    height: '35px',
    color: '#fff',
    backgroundColor: '#3b3839',
    borderRadius: '5px',
    float: 'left',
    marginRight:'2%',
    marginBottom:'2%',
  
  };

export const Footer = () => { return(
    //insert the styling here      
    <div style={footerStyles}>
      <div style={footerOptionsStyles}>
        <div onClick={ChangeShape} style={optionsStyles}  >
          <p>C: Shape</p>
        </div>
        <div onClick={ChangeSize} style={optionsStyles}>
          <p>C: Size</p>
        </div>
        <div onClick={ChangeColor} style={optionsStyles}>
          <p>C: Color</p>
        </div>
        <div  onClick={AddLabel} style={optionsStyles}>
          <p>Add Label</p>
        </div>
        <div onClick={DuplicateShape} style={optionsStyles}>
          <p>Duplicate</p>
        </div>
        <div onClick={Reset} style={optionsStyles}>
          <p>Reset</p>
        </div>
      </div>
    </div>        
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#fafafa',
};


//Color changing code

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorChanger = () => {
  return (
    
    <div style={containerStyles}>
      <Box style={{ width: '100px',
        height: '100px',
        backgroundColor: getRandomColor(),
        }}></Box>
      <Footer />
    </div>
  );
};

const ChangeColor = () =>  
{
  console.log('ChangeColor');
  ReactDOM.render(
    <React.StrictMode>
      <ColorChanger />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
 //// End of color changing code

//Change Shape
const getRandomShape = () => {
  const letters = ["Circle", "Square", "Triangle"];
  let shape = '#';
 
    shape += letters[Math.floor(Math.random() * letters.length)];
  
  return shape;
};


const shapeborderRadius = () => {
  if(shape === 'Circle'){
    return '50%';
  }
  else if(shape === 'Square'){
    return '0';
  }
  else if(shape === 'Triangle'){
    return '0';
  }
  else{
    return '0';
  }
};

const shapeWidth = () => {
  if(shape === 'Circle'){
    return '100px';
  }
  else if(shape === 'Square'){
    return '100px';
  }
  else if (shape === 'Triangle'){
    return '0px';
  }
}


const shapeHeight = () => {
  if(shape === 'Circle'){
    return '100px';
  }
  else if(shape === 'Square'){
    return '100px';
  }
  else if (shape === 'Triangle'){
    return '0px';
  }
  else{
    return '0';
  }

}

const shapeBorderLeft = () => {
  if(shape === 'Circle'){
    return '';
  }
  else if(shape === 'Square'){
    return '';
  }
  else if(shape === 'Triangle'){
    return '25px solid transparent';
  }
  else{
    return '';
  }
}

const shapeBorderRight = () => {
  if(shape === 'Circle'){
    return '';
  }
  else if(shape === 'Square'){
    return '';
  }
  else if(shape === 'Triangle'){
    return '25px solid transparent';
  }
  else{
    return '';
  }
};

const shapeBorderBottom = () => {
  if(shape === 'Circle'){
    return '';
  }
  else if(shape === 'Square'){
    return '';
  }
  else if(shape === 'Triangle'){
    return '50px solid transparent '; //#555
  }
  else{
    return '';
  }
};
let shape = "";

const ChangeShape = () =>  
{ shape = getRandomShape();
  
  ReactDOM.render(
    <React.StrictMode>
      <ShapeChanger />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
 
const ShapeChanger = () => {
  console.log("shape: " + shape);
  return (
    
    <div style={containerStyles}>
      <Box style={{ width: shapeWidth(),
        height: shapeHeight(),
        backgroundColor: getRandomColor(),
        borderRadius: shapeborderRadius(),
        borderLeft: shapeBorderLeft(),
        borderRight: shapeBorderRight(),
        borderBottom: shapeBorderBottom(),
        }}></Box>
      <Footer />
    </div>
  );
};



//End change Shape

const ChangeSize = () => console.log('ChangeSize');

const AddLabel = () => console.log('AddLabel');
const DuplicateShape = () => console.log('DuplicateShap');
const Reset = () => console.log('Reset');

