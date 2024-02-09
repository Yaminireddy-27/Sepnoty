import { IconContactssItems, IconContactssType } from "./styled";

const ContactSection = (props) => {
  const { contactDetails } = props;
  const { contactIcon, contactType } = contactDetails;

  return (
    <IconContactssItems>
      {contactIcon}
      <IconContactssType>{contactType}</IconContactssType>
    </IconContactssItems>
  );
};

export default ContactSection;
