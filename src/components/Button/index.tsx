// import React from 'react'
// import { Text, StyleSheet, Pressable } from 'react-native'

// export default function Botao() {
//   return (
//     <>
//       <Pressable style={styles.button}>
//         <Text style={styles.text}></Text>
//       </Pressable>
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: 'black'
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white'
//   }
// })
import React from 'react'
import './Button.css'

type ButtonProps = {
  onClick: () => void
  ButtonText: string
  submit: boolean
}

export function Button(props: ButtonProps) {
  return (
    <>
      <button
        type={props.submit ? 'submit' : 'button'}
        onClick={() => props.onClick()}
        className="button-class"
      >
        <p id="button-default-default-text">{props.ButtonText}</p>
      </button>
    </>
  )
}
