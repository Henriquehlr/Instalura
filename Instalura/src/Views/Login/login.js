import React, {Fragment , useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  View

} from "react-native";

import estilo from "./estilo"
import efetuarLogin from '../../api/login';

const Login = () => {
const [usuario, setUsuario] = useState("");
const [senha, setSenha] = useState("");
const [mensagemErro, setMensagemErro] = useState("")

  const tentarLogar = async () => {
    try{
      await efetuarLogin(usuario, senha);
    }catch(erro){
      setMensagemErro(erro.message)
    }
   
  }
  
  return (
    <Fragment>
      <View style={estilo.container}>
        <TextInput 
        style={estilo.inputs}
         placeholder="Usuário"
         onChangeText={texto => setUsuario(texto)}
         />
         <TextInput 
         style={estilo.inputs}
         placeholder="Senha"
         secureTextEntry={true}
         onChangeText={texto => setSenha(texto)}
         />
         <Text>{mensagemErro}</Text>
      </View>

      <View style={estilo.botaoView}>
        <Button title="Entrar" onPress={tentarLogar}/>
      </View>
      

    </Fragment>
    

  )
};
export default Login;
