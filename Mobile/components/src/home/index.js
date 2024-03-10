import { StyleSheet,View, Text, Image } from 'react-native';
import {styles} from './styles.js'

function home(){
  let nome = 'Joseffe Fatec sp';
  let img  = 'https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg';
  return(
    <View style={styles.container}>

        <View style={styles.View2}>
          <Image  source={{ uri: img}}   style={styles.img}  />
        </View>

        <View style={styles.View1}>
          <Text style={styles.texto}>Dados Pessoais</Text>
          <Text>Anderson Tome</Text>
        </View>

        <View style={styles.View1}>
          <Text style={styles.texto}>Fomação</Text>
          <Text>4 Semestre do Curso de ADS Fatec Praia Grande</Text>
        </View>

        <View style={styles.View1}>
          <Text style={styles.texto}>Experiencia</Text>
          <Text>12 anos como Anlista de Suporte ao Cliente na Totvs S.A.</Text>
          <Text>3 anos como Anlista de Suporte ao Cliente no Instituto do Cancer</Text>
        </View>

        <View style={styles.View1}>
          <Text style={styles.texto}>Projetos:</Text>
          <Text>Meu Primeiro APP</Text>
        </View>
      
      </View>
  )
}

export default home;