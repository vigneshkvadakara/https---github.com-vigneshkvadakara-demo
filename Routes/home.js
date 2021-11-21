/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {useState} from 'react';
import {useEffect} from 'react';

function TabOneScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [labour, setLabour] = useState([]);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  // function press() {
  //   setIsModalVisible(() => !isModalVisible);
  //   fetch('http://demo3365949.mockable.io/labour?id=26')
  //     .then(response => response.json())
  //     .then(json => {
  //       setLabour(json.labour);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  console.log('labour', labour);

  useEffect(() => {
    fetch('http://demo3365949.mockable.io/labours')
      .then(response => response.json())
      .then(json => {
        setData(json.labours);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log('data', data);
  function renderItem({item}) {
    const ID = item.id;
    function popup(){
      setIsModalVisible(() => !isModalVisible);
      fetch('http://demo3365949.mockable.io/labour?id=' + ID)
      .then(response => response.json())
      .then(json => {
        setLabour(json.labour);
      })
      .catch(error => {
        console.error(error);
      });
    }
    return (
      <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            height: 60,
            width: '90%',
            borderRadius: 10,
            backgroundColor: '#AEE5E2',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={popup}>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 13, color: '#fff', fontWeight: '600'}}>
            Quantity : {item.quantity}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <ScrollView>
      <FlatList
        data={data}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: '75%',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 20,
            // flex: 3,
          }}>
          <View style={{padding: 30}}>
            <Text style={{color: '#000', fontSize: 17, fontWeight: 'bold'}}>
              {labour.name}
            </Text>
            <Text
              style={{
                color: '#868686',
                fontSize: 13,
                fontWeight: '500',
                marginVertical: 15,
              }}>
              {labour.description}
            </Text>
            <Text style={{color: '#868686', fontSize: 13, fontWeight: '500'}}>
              Quantity          -   {labour.quantity}   hours
            </Text>
            <Text style={{color: '#868686', fontSize: 13, fontWeight: '500'}}>
              Start Date        -   {labour.startDate}
            </Text>
            <Text style={{color: '#868686', fontSize: 13, fontWeight: '500'}}>
              End Date          -   {labour.endtDate}
            </Text>
            <Text style={{color: '#6D6D6D', fontSize: 17, fontWeight: 'bold',marginVertical: 10}}>
             Progress
            </Text>
            <Image style={{height:30,width:'50%'}}
            source = {{uri:'https://assets.justinmind.com/wp-content/uploads/2018/09/green-progress-bar.png'}} />
            <Text style={{color: '#6D6D6D', fontSize: 17, fontWeight: 'bold',marginVertical: 10}}>
             Feedback
            </Text>
            <Image style={{height:30,width:'50%',marginHorizontal:10}}
            source = {{uri:'https://image.freepik.com/free-vector/five-stars-rating-vector-icon_38133-30.jpg'}} />
          </View>
          <View
            style={{
              alignItems: 'center',
              // justifyContent:'center',
            }}>
            <TouchableOpacity style={{backgroundColor:'#20CFC5',alignItems:'center',justifyContent:'center',height:'30%',width:'50%',borderRadius:10}}
            onPress={handleModal}>
              <Text style={{fontSize:13,fontWeight:'bold',color:'#fff'}}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#fff',
    paddingVertical:10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  separator: {
    height: 30,
    alignItems:'center',
    marginBottom:20,
  },
});
export default TabOneScreen;
