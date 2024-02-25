import { View, Text, Image } from 'react-native';
import {styles} from './components/styles.js'

function App(){

  let cNome = 'Anderson Abrahão Tome';
  let cForm = '4 Semestre do Curso de ADS Fatec Praia Grande'
  let cExpe = 'Anlista de Suporte ao Cliente 12 anos na Totvs S.A.\nSuporte ao Cliente 3 anos no Instituto do Cancer'
  let cProj = 'Meu Primeiro APP'
  let img  = 'https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg';

  return(
    <View style={styles.container}>

      <View style={styles.View2}>
        <Image  source={{ uri: img}}   style={styles.img}  />
      </View>

      <View style={styles.View1}>
        <Text style={styles.texto}>Dados Pessoais</Text>
        <Text>{cNome}</Text>
      </View>

      <View style={styles.View1}>
        <Text style={styles.texto}>Fomação</Text>
        <Text>{cForm}</Text>
      </View>

      <View style={styles.View1}>
        <Text style={styles.texto}>Experiencia</Text>
        <Text>{cExpe}</Text>
      </View>

      <View style={styles.View1}>
        <Text style={styles.texto}>Projetos:</Text>
        <Text>{cProj}</Text>
      </View>
    
    </View>
  )
}

export default App;