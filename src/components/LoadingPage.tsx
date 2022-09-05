import logo from "./LB.png";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "300px", borderRadius: "50%" }}
        src={logo}
        alt="logo"
      />
      <h1 style={{ color: "#C3083F", marginTop: "10px" }}>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
