import "./Header.css";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
      <div className="Header">
        <FormattedMessage id="contacts" description="Contact title message"/>
      </div>
  );
};
export default Header;
