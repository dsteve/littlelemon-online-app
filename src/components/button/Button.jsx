import "@/index.css";

import {Link} from "react-router-dom";

function GotoButton(props) {
  let variant = null;
  switch (props.variant) {
    case "primary-green":
      variant = "bg-primary-green  hover:shadow-lg hover:shadow-white";
      break;
    case "primary-yellow":
      variant = "bg-primary-yellow  hover:shadow-lg hover:shadow-[#D7D7D7]";
      break;
      case "secondary-grey" :
        variant = "border border-secondary-grey text-secondary-grey hover:shadow-lg hover:shadow-[#D7D7D7]";
        break;
    default:
      variant = "bg-white";
      break;
  }

  return (
    <Link
      to={props.to}
      className={`rounded-xl px-6 py-3 font-karla font-medium text-xl text-center ${variant}`}
    >
      {props.label}
    </Link>
  );
}

export default GotoButton;
