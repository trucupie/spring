import { useNavigate } from "react-router-dom";

function NavigateBackButton() {
  let navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Go Back</button>;
}

export default NavigateBackButton;
