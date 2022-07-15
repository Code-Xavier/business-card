import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/themusicalcoder" target="_blank"><img src={twitter} alt="twitter" /></a>
      <a href="https://www.instagram.com/themusicalcoder/" target="_blank"><img src={instagram} alt="instagram" /></a>
      <a href="https://github.com/Code-Xavier" target="_blank"><img src={github} alt="github" /></a>
    </div>
  );
}

export default Footer;
