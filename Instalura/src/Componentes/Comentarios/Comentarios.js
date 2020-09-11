import React, {Fragment, useState, useEffect} from 'react';
import{
  FlatList,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import estilo from './estilo';


const Comentarios = ( {comentarios} ) => {
    const [estComentarios, setComentarios] = useState(comentarios);

    const adicionarComentario = () => {
        campoInput.clear();
        const novoComentario = {
            data: Date.now(),
            text: conteudoCampoInput,
            userName: "Bugan"
        }
        setComentarios([...estComentarios, novoComentario]);
    }

    let campoInput;
    let conteudoCampoInput = "";
    return (
        <Fragment>
            <FlatList
            data={estComentarios}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
             <View style={estilo.naMesmaLinha}>
                 <Text>{item.userName}</Text>
                 <Text> {item.text}</Text>
             </View>
            }
                
            />
            <View style={estilo.naMesmaLinha}>
                <TextInput 
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={{flex:1}}
                />
                <TouchableOpacity onPress={adicionarComentario}>
                    <Image source={require("../../../res/img/send.png")}
                    style={estilo.imgSend}
                    />
                </TouchableOpacity>
            </View>
        </Fragment> 
    );
};

export default Comentarios;