import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const CloseButton: React.FC<Props> = ({ to }) => (
  <Link to={to} className="btn btn-close position-absolute top-0 end-0 m-3"></Link>
);

export default CloseButton;