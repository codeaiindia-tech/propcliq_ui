import React from "react";

const ProjectAddress = ({ projectData }) => {
  const addresses = [
    {
      address: projectData.project_address,
      city: projectData.city,
      state: projectData.state,
      country: projectData.country,
      locality: projectData.locality,
      suburbs: projectData.suburbs,
    },
  ];

  return (
    <>
      {addresses.map((address, index) => (
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Address</p>
              <p className="fw600 mb10 ff-heading dark-color">City</p>
              <p className="fw600 mb-0 ff-heading dark-color">State</p>
              <p className="fw600 mb-0 ff-heading dark-color">Country</p>
              <p className="fw600 mb-0 ff-heading dark-color">Locality</p>
              <p className="fw600 mb-0 ff-heading dark-color">Suburbs</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{address.address}</p>
              <p className="text mb10">{address.city}</p>
              <p className="text mb-0">{address.state}</p>
              <p className="text mb-0">{address.country}</p>
              <p className="text mb-0">{address.locality}</p>
              <p className="text mb-0">{address.suburbs}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
          title={addresses[0].address}
          aria-label={addresses[0].address}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default ProjectAddress;
