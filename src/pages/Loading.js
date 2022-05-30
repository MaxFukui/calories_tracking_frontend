import Lottie from "lottie-react";
import animationData from "../public/99748-blue-flower";

function Loading() {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };
  return(
      <div>
        <p>teste</p>
          <Lottie animationData={animationData}
          loop={true}
          height={50}
          width={100}
          />
      </div>
  )
}

export default Loading;
