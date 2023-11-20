import { Box, Input, Image, Button } from "@chakra-ui/react";
import imgReloj from '../img/relojArena.svg';

const Pantalla = ({numero}) => {
    const estiloFondo = {
        position:'absolute',
        top:'-100px',
        right:'50%',
        transform:`translateX(calc(50% + 40px))`,
        width:'302px',
        height:'80px',
        
    }
    const estiloPantalla ={
        width:'250px',
        height: '80px',
        borderRadius:'10px',
        border:'1px solid #FFF',
        background: 'rgba(217, 217, 217, 0.50)',  
        boxShadow: '2px 4px 4px 0px rgba(255, 255, 255, 0.40)',
        textAlign:'right',
        paddingRight:'10px',
        outline:'none',
        pointerEvents:'none',
        fontFamily:'Calculator',
        fontSize:'2.5rem',
        /* color:'#82172C', */
        textShadow:'2px 1px 2px #e0e0e0',
        color:'#1C3966',
    }
    
    const estiloBoton = {
        width:'40px',
        height:'40px',
        marginLeft:'10px',
    }

  return (
    <Box  style={estiloFondo}>
       <Input style={estiloPantalla} value={numero}/>
       <Button><Image src={imgReloj} style={estiloBoton}/></Button>
    </Box>  
  )
}

export default Pantalla