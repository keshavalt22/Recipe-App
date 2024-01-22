import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <ul className='contact-link'>
        <li>
          <a href='https://www.linkedin.com/in/keshav-khatri-30978a267/'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/keshavalt22'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href='#'>
            <FaTwitter />
          </a>
        </li>
      </ul>
      <div className="credit">
        <p>Keshav Khatri | Recipe App 2024</p>
      </div>
    </section>
  )
}


export default Footer;