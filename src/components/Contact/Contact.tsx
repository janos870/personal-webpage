import { Container } from "./styles";
import gmail from "../../assets/gmail.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import { useTranslate } from "../../i18n";

export function Contact() {
  const translate = useTranslate();
  return (
    <Container id="contact">
      <header>
        <h2>{translate("contact.title")}</h2>
      </header>
      <div className="contacts">
        <div>
          <a href="janosbalog.devs@gmail.com">
            <img src={gmail} alt="Email" />
          </a>
          <a href="mailto:janosbalogh.devs@gmail.com">
            janosbalogh.devs@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+36501345572">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+36501345572">(+36) 501345572</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
