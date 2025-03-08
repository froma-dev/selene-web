import CloudImage from "@assets/CloudImage";
import "@styles/CloudHolder.css";

const CloudHolder = () => {
  return (
    <div className="cloud-holder">
      <CloudImage fill="#8EF6E4" />
      <CloudImage fill="#E4FF92" />
      <CloudImage fill="#FFBDFF" />
    </div>
  );
};

export default CloudHolder;
