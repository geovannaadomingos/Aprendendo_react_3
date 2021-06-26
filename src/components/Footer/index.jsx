import './style.css'
import iconLinkedin  from '../../assets/linkedIn_icone.png'
import iconGithub  from '../../assets/github_icone.png'
import iconInstagram  from '../../assets/instagram_icone.png'

const Footer = () => {
    return(
        <>
            <section className="section_footer">
                <div className="div_redesSociais_footer">
                    <a target="_blanck" href="https://www.linkedin.com/in/geovanna-domingos-b31b79190"  class="redesSociais_link_footer"><img class="redesSociais_img" src={iconLinkedin} alt="Ícone do Linkedin" /></a>
                    <a target="_blanck" href="https://github.com/geovannaadomingos" class="redesSociais_link_footer"><img class="redesSociais_img" src={iconGithub} alt="Ícone do GitHub" /></a>
                    <a target="_blanck" href="https://www.instagram.com/geovannaadomingos/" class="redesSociais_link_footer"><img class="redesSociais_img" src={iconInstagram} alt="Ícone do Instagram" /></a>
                </div>
                <p className="p_footer">Carinhosamente desenvolvido por <a href="https://github.com/geovannaadomingos" className="p_link_footer">Geovanna Domingos</a> - 2021</p>
            </section>
        </>
    );
}
export default Footer