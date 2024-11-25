function ShowDetails({ status, network, premiered }) {
  return (
    <div>
      <h6>{status ? status : 'NA'}</h6>
      <h4>{network ? network : 'NA'}</h4>
      <h4>{premiered ? premiered : 'NA'}</h4>
    </div>
  );
}

export default ShowDetails;
