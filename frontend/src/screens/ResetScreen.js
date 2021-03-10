import React from "react";

import Reset from "../components/Asks/Reset";

const ResetScreen = ({ match }) => {
  return <Reset title="إعادة" params={match.params} />;
};

export default ResetScreen;
