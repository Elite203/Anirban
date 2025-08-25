import React from 'react';

const RotatingLogo = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/d8069b03-4e9a-4a08-93cd-98538dd7ceec/f19ea6c022b4ffb9df4dd3e215411d54.png";
  return (
    <div className="rotating-logo-container">
      <div className="rotating-logo">
        <div className="rotating-logo-face face-front"><img src={logoUrl} alt="logo" className="logo-image" /></div>
        <div className="rotating-logo-face face-back"><img src={logoUrl} alt="logo" className="logo-image" /></div>
        <div className="rotating-logo-face face-left"><img src={logoUrl} alt="logo" className="logo-image" /></div>
        <div className="rotating-logo-face face-right"><img src={logoUrl} alt="logo" className="logo-image" /></div>
        <div className="rotating-logo-face face-top"><img src={logoUrl} alt="logo" className="logo-image" /></div>
        <div className="rotating-logo-face face-bottom"><img src={logoUrl} alt="logo" className="logo-image" /></div>
      </div>
    </div>
  );
};

export default RotatingLogo;