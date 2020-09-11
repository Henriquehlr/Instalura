import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;
console.log("dsbdchbhcbsdcbdjbcdsbndckdsbncujsbc", largura);

const estilo = StyleSheet.create({
    container:{
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    inputs:{
      width:largura*0.8,  
      textAlign:"center",
      marginTop:40,
      fontSize:25
    },
    botaoView:{
        alignItems:"center",
        marginBottom:50
    }
})

export default estilo;