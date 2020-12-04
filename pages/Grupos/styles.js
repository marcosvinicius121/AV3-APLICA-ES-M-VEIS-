import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;
  margin-top:25px;
`;


export const Texto = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;

`

export const ContainerMessages = styled.View`
  width:100%;
  height: 10px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 20px;
  flex:1;
 

`;

export const Message = styled.Text`
 color:#fff;
 font-size:18px;
 text-align:justify;
 padding-top: 2px;

`

export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-bottom:10px;
`

export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;
  background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`


export const ButtonText = styled.Text`
  color:${props => props.invert ? "#ae1b73" : "#fff"};
  font-size:14px;
  font-weight:bold;
  `

  export const ButtonTextGroup = styled.Text`
  width: 300px;
  height: 100px;
  margin: 10px;
  color:${props => props.invert ? "#ae1b73" : "#fff"};
  font-size:16px;
  text-align:center;
  `

export const Input = styled.TextInput`
  border:1px solid #ccc;
  width: 360px;
  height: 60px;
  align-items:center;
  border-radius:5px;
  background-color:#FFFFFF;
  margin-bottom: 10px;

`

export const ContainerGroup = styled.View`
width:100%;
height: 100%;
padding: 10px;
border-radius: 10px;
flex:1;
background-color: #FFF;

`