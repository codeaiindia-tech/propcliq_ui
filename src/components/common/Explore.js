import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      title: "Buy a property",
      text: "Hassle free process of buying with least formalities online.",
      linkText: "Let's find something together",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      title: "Sell a property",
      text: "You can upload your property for free or ask our support on call to upload on your behalf",
      linkText: "Start uploading my property",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      title: "Rent a property",
      text: "Filter your choice with a safe rental options and leave rest of the formalities on us.",
      linkText: "Find a rental",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <Image width={150} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <Link href="/grid-default" className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
