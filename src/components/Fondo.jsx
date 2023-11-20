import { Box, Center } from "@chakra-ui/react"
import fondo from '../img/fondo.jpeg';

const estiloBox = {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:"translate(-50%, -50%)",

    backgroundImage:`url(${fondo})`,
    width: '500px',
    height: '200px',
    backgroundSize:'cover',
    borderRadius:'20px',

}

const Fondo = () => {
  return (
    <Box w='510px' h='210px' bg='white' borderRadius='20px' boxShadow='2px 4px 10px 0px rgba(0, 0, 0, 0.50)'>
       <Box style={estiloBox} ></Box>
    </Box>
  )
}

export default Fondo