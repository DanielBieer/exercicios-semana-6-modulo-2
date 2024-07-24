import { useState } from 'react'
import '../assets/styles/FormContato.css'

function FormContato() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviarMensagem() {
        const objetoContato = {
            nome: nome,
            telefone: telefone,
            email: email,
            mensagem: mensagem
        }

        console.log('DADO ENVIADO: ', objetoContato)
    }
    return (
        <>
            <div className="nosso-contato">
                <div className="local">
                    <span>Loja Online</span>
                    <ul>
                        <li>
                            <span>Rua Ali Perto, 35</span>
                            <span>Rio de Janeiro - RJ</span>
                            <span>Brasil - Terra - Vita Láctea</span>
                        </li>

                        <li>
                            <span>contato@bikcraft.com</span>
                            <span>assistencia@bikcraft.com</span>
                        </li>

                        <li>+55 21 9999-9999</li>
                    </ul>
                </div>

                <div className="form">
                    <input type='text' placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type='text' placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                    <input type='email' placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {/* value={nome} onChange={(e) => setNome(e.target.value)} */}
                    <textarea placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                    <button onClick={() => enviarMensagem()}>Enviar Mensagem</button>
                </div>
            </div>
        </>
    )
}

export default FormContato