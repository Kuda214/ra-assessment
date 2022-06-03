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

  const inputStyles: React.CSSProperties = {
    width:"100%",
    height:"60px", 
    padding:"10px", 
    marginTop:"40px",
    backgroundColor:"black", 
    color:"white", 
    textAlign:"center"};


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

  const inputBOxStyle: React.CSSProperties = {
      textAlign: "center",
      width:  "90%",
      padding: "15px",
      borderRadius:"15px",
      margin: "8px 0",
      marginTop: "100px",
  



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
    num = 0;

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
    const letters = ["Circle", "Square", "rectangle","Circle"];
    let shape = '';
  
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
    else if(shape === 'rectangle'){
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
    else if (shape === 'rectangle'){
      return '200px';
    }
  }


  const shapeHeight = () => {
    if(shape === 'Circle'){
      return '100px';
    }
    else if(shape === 'Square'){
      return '100px';
    }
    else if (shape === 'rectangle'){
      return '100px';
    }
    else{
      return '0';
    }

  }

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
    num = 0;

    return (
      
      <div style={containerStyles}>
        <Box style={{ width: shapeWidth(),
          height: shapeHeight(),
          backgroundColor: "#f00",
          borderRadius: shapeborderRadius(),
          borderColor: "#f00"
          }}></Box>
        <Footer />
      </div>
    );
  };

  //End change Shape
  const ResizeShape = () => {
    const size = ["100px", "200px" ,"300px","400px","500px", "600px"];
    let toResizeTo = '';
  
    toResizeTo += size[Math.floor(Math.random() * size.length)];
    
    return toResizeTo;
  };

  export const ChangeSize = () => {
    num = 0;

    const resize = ResizeShape();

    ReactDOM.render(
      <React.StrictMode>

        <Box style={{
          width:resize ,
          height: resize,
          backgroundColor: "#f00",
          textAlign:"center",
          
          }}></Box>
        <Footer/>
      </React.StrictMode>,
    
        
      document.getElementById('root'),
      
    );
    
  };


  //End change Size

  //add label

  const AddLabel = () => {

    num = 0;

    ReactDOM.render(
      <React.StrictMode>

        <div style={inputStyles}> HI, Apologies - This functionality is still under development <p></p> </div>
        <Box style={{
          width:"100px" ,
          height: "100px",
          backgroundColor: "#f00",
          marginTop: "30px",
          marginLeft:"30px",
        
          }}></Box>
        <Footer/>
      </React.StrictMode>,
    
        
      document.getElementById('root'),
      
    );
  };

  //done add label

  //Duplicate Image
  let num =0;
  const DuplicateShape = () =>{
    //I will modify this 

    num++;
    if(num>5) num = 1;
    if(num == 1)
    {
      ReactDOM.render(
        <React.StrictMode>
          
          <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (num*20) + "px",
            
            }}></Box>
            
          <Footer/>
        </React.StrictMode>,
      
          
        document.getElementById('root'),
        
      );
    }
    else if (num == 2)
    {
      ReactDOM.render(
        <React.StrictMode>
          
          <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor:  getRandomColor(),
            marginLeft: (1*20) + "px",
            
            }}></Box>
            <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (2*20) + "px",
            
            }}></Box>
          <Footer/>
        </React.StrictMode>,
      
          
        document.getElementById('root'),
        
      );
    }
    else if (num == 3)
    {
      ReactDOM.render(
        <React.StrictMode>
          
          <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (1*20) + "px",
            
            }}></Box>
            <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor()
            ,
            marginLeft: (2*20) + "px",
            
            }}></Box>
            
            <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (3*20) + "px",
            
            }}></Box>
            
          <Footer/>
        </React.StrictMode>,
      
          
        document.getElementById('root'),
        
      );
    }
    else if(num == 4)
    {
      ReactDOM.render(
        <React.StrictMode>
          
          <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (1*20) + "px",
            
            }}></Box>
            <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor()
            ,
            marginLeft: (2*20) + "px",
            
            }}></Box>
            
            <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (3*20) + "px",
            }}></Box>

            <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (4*20) + "px",
            }}></Box>
            
          <Footer/>
        </React.StrictMode>,
      
          
        document.getElementById('root'),
        
      );
    }
    else if(num == 5)
    {
      ReactDOM.render(
        <React.StrictMode>
        
          <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor(),
            marginLeft: (1*20) + "px",
          
          }}></Box>
          <Box style={{
            width:"100px" ,
            height: "100px",
            backgroundColor: getRandomColor() ,
            marginLeft: (2*20) + "px",
          
          }}></Box>
          
          <Box style={{
          width:"100px" ,
          height: "100px",
          backgroundColor: getRandomColor(),
          marginLeft: (3*20) + "px",
          }}></Box>

          <Box style={{
          width:"100px" ,
          height: "100px",
          backgroundColor: getRandomColor(),
          marginLeft: (4*20) + "px",
          }}></Box>

        <Box style={{
          width:"100px" ,
          height: "100px",
          backgroundColor: getRandomColor(),
          marginLeft: (5*20) + "px",
          }}></Box>
          
        <Footer/>
      </React.StrictMode>,
    
        
      document.getElementById('root'),
      
    );
  }
  }

  //End of Duplicate img


  //start of reset

  const Reset = () => {
    num = 0;
    ReactDOM.render(
      <React.StrictMode>

        <Box style={{
          width:"100px" ,
          height: "100px",
          backgroundColor: "#f00",
          textAlign:"center",
          marginLeft: "50%",
          
          }}></Box>
        <Footer/>
      </React.StrictMode>,
    
        
      document.getElementById('root'),
      
    );
  };

  //end of reset
