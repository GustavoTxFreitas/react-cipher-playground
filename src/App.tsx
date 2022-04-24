import { useState } from 'react'

export default function App() {
  const [key, setKey] = useState('')
  const [text, setText] = useState('')
  const [display, setDisplay] = useState('')

  const createKeyword = () => {
    let len = Math.ceil(text.length / key.length)
    let str = key.repeat(len)

    return str.slice(0, text.length);
  };

  function cipherText() {
    let keyword = createKeyword();
    let newText = "";

    for(let i = 0, char = text[i]; i < text.length; i++){
      newText += char >= 'A' && char <= 'Z' ? String.fromCharCode(((text.charCodeAt(i) + keyword.charCodeAt(i)) % 26) + 65) : char
    }

    setDisplay(newText)
  }

  function originText() {
    var keyword = createKeyword();
    var newText = "";
    
    for(let i = 0, char = text[i]; i < text.length; i++){
      newText += char >= 'A' && char <= 'Z' ? String.fromCharCode(((text.charCodeAt(i) - keyword.charCodeAt(i)) % 26) + 65) : char
    }

    setDisplay(newText)
  }

  return (
    <main className="app">
      <header>
        <h1>Cifra de Vigenère</h1>
        <q cite="https://github.com/GustavoTxFreitas/react-cipher-playground">
          A cifra de Vigenère é um método de criptografia, que utiliza uma série
          de cifras de César &ndash; gerada a partir de uma palavra chave.
        </q>
      </header>


      {display}

      <section>
        <label htmlFor='input-key'>Insira uma Chave:</label>
        <input
          className='input'
          id='input-key'
          type='text'
          value={key}
          maxLength={50}
          autoFocus
          onChange={e => setKey(e.target.value.toUpperCase())}
          placeholder='Digite algo:' />

        <label htmlFor='input-text'>Insira um Texto:</label>
        <input
          className='input'
          id='input-text'
          type='text'
          value={text}
          maxLength={50}
          autoFocus
          onChange={e => setText(e.target.value.toUpperCase())}
          placeholder='Digite algo:' />


        <div id="buttonContainer">
          <button onClick={cipherText}>Criptografar</button>
          <button onClick={originText}>Decifrar</button>
        </div>
      </section>


      <section>
        <ul>
          <li>Digite a chave (senha) que protege o texto;</li>
          <li>Agora, escreva o texto que quer codificar/decifrar;</li>
          <li><s>Faça um programa que corte uma batata em rodelas; (Sem usar vetor!)</s></li>
          <li>Aperte um dos elegantes botões;</li>
        </ul>

        <p>E pronto!</p>
      </section>


      <footer>
        <p>
          O código fonte desta aplicação está sob a licença MIT, você pode conferir&thinsp;
          <a href="https://github.com/GustavoTxFreitas/react-vigenere-cipher">
            clicando aqui
          </a>.
        </p>
      </footer>
    </main>
  )
}
