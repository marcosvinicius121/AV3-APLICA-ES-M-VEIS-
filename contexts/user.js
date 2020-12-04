import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [group, setGroup] = useState(null);

  const [route, setRoute] = useState(null);

  const [security,setSecurity]= useState(true);

  const changeSecurity = (sec) => {
    setSecurity(sec)
  }

  const ListenAuth = (userState) => {
    setUser(userState)
  }

  const changeGroup = (groupState) => {
    setGroup(groupState)
  }

  const changeRoute = (routeState) => {
    setRoute(routeState)
  }


  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(ListenAuth);
    return listener;
  }, [])


  const signIn = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.warn('Seja bem-vindo(a) ao Grupou!')
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signUp = (email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        console.warn('Usuário criado com sucesso!')
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(resp => {
        console.warn('Usuario Deslogado com sucesso!')
      })
      .catch(err => {
        console.warn(err)
      })
  }
  const esqueciSenha = (email) => {
    if(email == null){
      console.warn('Para recuperar a senha, é necessário digitar seu e-mail!');
    }else{
      firebase.auth().sendPasswordResetEmail(email)
      .then(res => {
        console.warn('Verifique seu e-mail! Para alterar sua senha.');
      })
      .catch(erro => {
       console.warn('Erro ao recuperar senha ',erro)
      });
    }
    
  
    }

  return (
    <UsuarioContext.Provider value={{ user, group, route, signIn, signOut, signUp, changeGroup, changeRoute,esqueciSenha,changeSecurity, security}}>
      {children}
    </UsuarioContext.Provider>
  )
}


export { UsuarioContext, UsuarioProvider }