import logo from "./LB.png";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img
        style={{ width: "200px", borderRadius: "50%", opacity: 0.8 }}
        src={logo}
        alt="Loading"
      />
      <h2 style={{ color: "#C3083F", marginTop: "15px" }}>Loading...</h2>
    </div>
  );
};

export default LoadingPage;
