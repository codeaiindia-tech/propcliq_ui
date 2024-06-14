import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Address",
      info: "G-75, Jaitpur, Badarpur, New Delhi",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Customer Care",
      info: "+(91) 9990905440",
      link: "tel:+012305094502",
    },
    {
      text: "Need Live Support?",
      info: "info@propcliq.com",
      link: "mailto:info@propcliq.com",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      2w2w2w2w2w2w2
      {contactInfoData.map((contact, index) => (
        <div className="contact-info mb25" key={index}>
          <p className="text mb5">{contact.text}</p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
