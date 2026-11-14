const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#C3083F" }}>Something Went Wrong</h1>
      <p style={{ marginTop: "10px" }}>
        Could not load the data. Try refreshing the page.
      </p>
    </div>
  );
};

export default ErrorPage;
