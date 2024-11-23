function AppTitle(props) {
  const { title, subtitle } = props;
  return (
    <>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </>
  );
}

export default AppTitle;
