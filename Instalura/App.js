import React, {Fragment, useState, useEffect} from 'react';
import{
  ScrollView,
  FlatList
} from "react-native";
import { Cabecalho } from './src/Componentes/cabecalho';
import { Foto } from './src/Componentes/Foto';

const App = () => {
  const [fotos, setFotos] = useState([]);
  
  useEffect(() => {
    const lerFotos = async() => {
      const fotosHTTP = await fetch("http://10.1.0.2:3030/feed");
      const fotosJson = await fotosHTTP.json();
      setFotos(fotosJson);
    }

    lerFotos();
  },[])

  return (
    <ScrollView>
     <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item })=>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName}/>
            <Foto />
          </Fragment>} 
          />
    </ScrollView>
  )
};

export default App;
