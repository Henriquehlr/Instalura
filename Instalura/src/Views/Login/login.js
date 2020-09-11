import React, {Fragment, useState, useEffect} from 'react';
import{
    Text,
    TextInput,
    Button,
    View,
    AsyncStorage
} from "react-native";
import AsyncStorage from '@react-native-community/=async-storage'
import estilo from './estilo';
import efetuarLogin from '../../api/login';

const Login = () => {

  const [usuario, setUsuario] = useState(" ");
  const [senha, setSenha] = useState(" ");
  const [mensagemErro, setMensagemErro] = useState("")

  const tentarLogar = async () =>{
    try{
      const token = await efetuarLogin(usuario, senha);
      await AsyncStorage.setItem("instalura_token", token);
      const r = AsyncStorage.getItem("instalura_token");
      console.warn(r);

    }catch(erro){
      setMensagemErro(erro.message);
    }
  }

  return (
    <Fragment>
      <View style={estilo.container}>
        <TextInput 
          style={estilo.inputs}
          placeholder="Usuario"
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
       <Button  title="Entrar" onPress={tentarLogar}/>
      </View>
      
    </Fragment>
  )
};

export default Login;
