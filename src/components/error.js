import React, { useContext } from 'react'
import MyContext from '../context';

import '../styles/erro.css'

function Erro(){
    const { darkModeOn } = useContext(MyContext)
    return(
        <>
            <h1 className={darkModeOn === true ? 'erroh1 dark-title' : 'erroh1'}> País não encontrado </h1>

            <h3 className={darkModeOn === true ? 'erroh3 dark-title' : 'erroh3'}> 
                Verifique se:
                <span className={darkModeOn === true ? 'tipo-erro dark-title' : 'tipo-erro'}>- A primeira letra é maiúscula</span>
                <span className={darkModeOn === true ? 'tipo-erro dark-title' : 'tipo-erro'}>- O nome do país está correto (precisa ser em inglês)</span>
                <span className={darkModeOn === true ? 'tipo-erro dark-title' : 'tipo-erro'}></span>
            </h3>
        </>
    )
}

export default Erro;