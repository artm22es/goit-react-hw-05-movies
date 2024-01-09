import { Link } from 'react-router-dom';

export const BackLink = ({ backLink }) => {
  return <Link to={backLink.current}></Link>;
};
