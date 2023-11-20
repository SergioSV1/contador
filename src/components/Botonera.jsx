import { useEffect, useRef, useState } from "react";

import { Box, Button, Image, theme } from "@chakra-ui/react";
import imgStart from '../img/start.svg';
import imgStop from '../img/stop.svg';
import imgAdd from '../img/add.svg'
import imgMinus from '../img/minus.svg'
import imgRestart from '../img/restart.svg'
import imgDisabled from '../img/disabled.svg'
import Pantalla from "./Pantalla";


let temporizador;
const Botonera = () => {
    const refAutomatico = useRef();
    const refAutomaticoImg = useRef();
    const refStop = useRef();
    const refStopImg = useRef();

    const estiloBotonera = {
        position:'absolute',
        bottom:'5px',
        left:'50%',
        transform:'translateX(-50%)',
        width: '500px',
        height: '72px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'#30285B80',

        borderRadius:'0px 0px 20px 20px',
        
        boxShadow:'0px -2px 2px 0px rgba(255, 255, 255, 0.40)',
    }
    const estiloBotones = {
        width: '50px',
        height: '50px',
        marginLeft:'10px',
    }

    

    const [numero,setNumero] = useState(0);

    const aumetarNumero = ()=>{
      setNumero(numero+1);
    }
    const restarNumero = ()=>{
      setNumero(numero-1);
    }
    const restart = ()=>{
      setNumero(0);
    }


    const automatico = (e)=>{
       /*  setNumero((num)=>num+1);  */     
      temporizador = setInterval(()=>{
          setNumero((num)=>num+1);
        },1000);

        refAutomatico.current.disabled = true;
        refAutomaticoImg.current.src = imgDisabled;
        refStop.current.disabled = false;
        refStopImg.current.src = imgStop;
  
    }
   

    const stopAutomatico = ()=>{
      clearInterval(temporizador);

      refAutomatico.current.disabled = false;
      refAutomaticoImg.current.src = imgStart;

      refStop.current.disabled = true;
      refStopImg.current.src = imgDisabled;
    }

  return (
    <>
    <Box style={estiloBotonera} >
        <Pantalla numero={numero}/>

        <Button ref={refAutomatico}><Image ref={refAutomaticoImg} src={imgStart} style={estiloBotones} onClick={automatico} /> </Button>
        <Button isDisabled="true" ref={refStop}><Image src={imgDisabled} style={estiloBotones} onClick={stopAutomatico} ref={refStopImg}/></Button>
        <Button><Image src={imgAdd} style={estiloBotones} onClick={aumetarNumero}/></Button>
        <Button><Image src={imgMinus} style={estiloBotones} onClick={restarNumero}/></Button>
        <Button><Image src={imgRestart} style={estiloBotones} onClick={restart}/></Button>

    </Box>


    </>
  )
}

export default Botonera