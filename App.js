import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso e a menor distancia entre duas pessoas.',
    'Deixe de lado as preocupacoes e seja feliz.',
    'Realize o obvio, penso no improvavel e conquiste o impossivel.',
    'Acredite em milagres, mas nao dependa deles.',
    'A maior barreira para o sucesso e o medo do fracasso.'];

  }

  quebraBiscoito(){
    let numeroRandom = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: '"'+this.frases[numeroRandom]+'"',
      img: require('./src/biscoitoAberto.png')
    })

  }

  render(){
    return(
      <View style={[styles.container,styles.backgroundColor]}>
        
        <Image
        source={this.state.img}
          style={styles.img}
        />

        <Text style={[styles.fontTexto]}>{this.state.textoFrase}</Text>
        
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.botaoArea}>
            <Text style={[styles.fontColor, styles.botaoTexto]}>
              Veja a sua sorte
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250
  },
  fontTexto:{
    fontSize: 20,
    color: '#FFF',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 25
  },
  botaoArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  }
})

export default App;