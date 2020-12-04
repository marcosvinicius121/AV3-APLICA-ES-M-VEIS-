import React, { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';

import {
  Container,
  Texto,
  ContainerButtons,
  Button,
  ButtonText,
  Input,
  ContainerMessages,
  Message,
  ButtonTextGroup


} from './styles';

import firebase from 'firebase';
import 'firebase/firestore';
import { UsuarioContext } from '../../contexts/user';
    

const Grupos = () => {

    const { user, group, changeGroup, changeRoute } = useContext(UsuarioContext);

    const [grupos, setGrupos] = useState([]);
    const [newGrupo, setNewGrupo] = useState("");




    const ListenUpdateGrupos = (snap) => {

        const data = snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setGrupos(data)
      }

    useEffect(() => {
        const listener = firebase.firestore()
          .collection('grupos').onSnapshot(ListenUpdateGrupos)
    
        return () => listener()
      }, [])
    
      const addGrupo = () => {
        if (newGrupo == "") {
          console.warn('Preencha o nome do grupo!')
          return
        }
        try {
          firebase.firestore().collection('grupos').add({
            nome: newGrupo
          })
          setNewGrupo("");
        } catch (err) {
          console.warn("Falha ao adicionar grupo, tente mais tarde!");
        }
      }

 
      const acessarChat = (group) => {
            changeGroup(group)
            changeRoute('chat')
            
      }

  return(
  <Container>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <ContainerMessages>
                  <Texto style={{fontweight:'bold'}}>GRUPOS</Texto>
              </ContainerMessages>

             
             {grupos.map(grupos => (
                     <Button onPress={() => acessarChat(group)} style={{backgroundColor: '#FFF'}}>
                        <ButtonTextGroup style={{color: '#AB1B71'}}>{grupos.nome}</ButtonTextGroup>
                  </Button>
                  ))}
           
            <ContainerMessages>
                <Texto style={{fontweight:'bold'}}>NOVO GRUPO</Texto>
                           <Input
                             placeholder="Digite o nome do grupo"
                             onChangeText={text => setNewGrupo(text)}
                             value={newGrupo}
                           />
                          <ContainerButtons>
                              <Button  style={{backgroundColor: '#FFF'}}
                              onPress={() => { addGrupo() }}
                              >
                                  <ButtonText style={{color: '#AB1B71'}} >Cadastrar</ButtonText>
                              </Button>
                          </ContainerButtons>
            </ContainerMessages>
            
          </View>
      </Container>
    
  )
    
}

export default Grupos;