import "./GlassContainer.scss";

const GlassContainer = () => {
  return (
    <div className="wrapper" style={{ position: "relative" }}>
      <p className="test_text">
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
      </p>

      <div className="absolute_center">
        <div className="liquidGlass-wrapper">
          <div className="liquidGlass-effect"></div>
          <div className="liquidGlass-tint"></div>
          <div className="liquidGlass-shine"></div>
          <div className="liquidGlass-logo">
            <img src="./logo.svg" alt="logo" />
            <img src="./text-logo.svg" alt="text-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassContainer;
