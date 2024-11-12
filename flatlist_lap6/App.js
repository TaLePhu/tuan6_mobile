import { Text, View, StyleSheet,Image, TouchableOpacity, FlatList } from 'react-native';

const data = [
  {
    img: require('./assets/img/ca_nau_lau.png'),
    title: "1 Kg ga kho bo toi",
    shopCompany: "LTD food"
  },
  {
    img: require('./assets/img/do_choi_dang_mo_hinh.png'),
    title: "1 Kg ga kho bo toi",
    shopCompany: "the gioi do choi"
  },
  {
    img: require('./assets/img/ga_bo_toi.png'),
    title: "1 Kg ga kho bo toi",
    shopCompany: "LTD food"
  },
  {
    img: require('./assets/img/hieu_long_con_tre.png'),
    title: "1 Kg ga kho bo toi",
    shopCompany: "LTD food"
  },
  {
    img: require('./assets/img/lanh_dao_gian_don.png'),
    title: "1 Kg ga kho bo toi",
    shopCompany: "LTD food"
  },
  {
    img: require('./assets/img/hieu_long_con_tre.png'),
    title: "1 Kg ga kho bo toi",
    shopCompany: "LTD food"
  }
]

export default function App() {
  return (
    <View>
    
      <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      <FlatList
        data={data}
        renderItem={({item})=><Product {...item}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const Product = ({img, title, shopCompany}) => {
  return(

    <View style={styles.container}>

        <View style={styles.view1}>
          <Image
            style={{width: 74, height: 74}}
            source={img}
          />
          <View style={{justifyContent: 'space-between'}}>
            <Text>{title}</Text>
            <Text>Shop: {shopCompany}</Text>
          </View>
          <TouchableOpacity style={styles.btnChoose}>
            <Text>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 5,
    },
    view1: {
      flexDirection: 'row',
      padding: 5,
      borderColor: "#000",
      borderWidth: 1,
      borderRadius: 10
    },
    btnChoose: {
      backgroundColor: "red", 
      width: 88, 
      height: 38,
      justifyContent: 'center',
      alignItems: "center"
    }
});
