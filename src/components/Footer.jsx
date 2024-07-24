import '../assets/styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Bikcraft Logo" />
            </div>
            <div className="footer-info">
                <h3>Contato</h3>
                <p>+55 21 9999-9999</p>
                <p>contato@bikcraft.com</p>
                <p>Rua Ali Perto, 42 - Botafogo</p>
                <p>Rio de Janeiro - RJ</p>
            </div>
            <div className="footer-social">
                <h3>Siga-nos</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youtube</p>
            </div>
            <div className="footer-nav">
                <h3>Informações</h3>
                <ul>
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                    <li>Termos e Condições</li>
                </ul>
            </div>
        </div>
        <p className="footer-copy">Bikcraft © Alguns direitos reservados.</p>
    </footer>
    )
}

export default Footer