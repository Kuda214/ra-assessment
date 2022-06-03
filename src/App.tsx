import React from 'react';
import { Box } from './components/Box';
import { Footer } from './components/Footer';


const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#fafafa',
};

const boxStyles: React.CSSProperties = {
  width: '100px',
  height: '100px',
  backgroundColor: '#f00',
};

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

const instructionStyle: React.CSSProperties = {
  color: '#070',
  fontSize: '26px',
  top:0,
  fontWeight: 'bold',
};

export const App = () => {
  return (
    <div style={containerStyles}>
      <Box style={boxStyles}></Box>
      <Footer />
    </div>
  );
};

  const ChangeShape = () => {
  
  <div>
    <p style={instructionStyle}>Select the color you would like to change to: </p>

  </div>
  console.log('Changing Shape');
};



// export const Footer = () => {
//   return (
//     <div style={footerStyles}>
//       <div style={footerOptionsStyles}>
//         <div onClick={ChangeShape} style={optionsStyles}  >
//           <p>C: Shape</p>
//         </div>
//         <div onClick={ChangeSize} style={optionsStyles}>
//           <p>C: Size</p>
//         </div>
//         <div onClick={ChangeColor} style={optionsStyles}>
//           <p>C: Color</p>
//         </div>
//         <div  onClick={AddLabel} style={optionsStyles}>
//           <p>Add Label</p>
//         </div>
//         <div onClick={DuplicateShape} style={optionsStyles}>
//           <p>Duplicate</p>
//         </div>
//         <div onClick={Reset} style={optionsStyles}>
//           <p>Reset</p>
//         </div>
//       </div>
//     </div>
//   );
// };



