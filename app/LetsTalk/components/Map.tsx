const Map = () => (
  <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg mb-16">
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=D-45,Cyber+City,Gurugram,Haryana,India&output=embed"
    />
  </div>
);

export default Map; 