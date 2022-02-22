import Image from "next/image";
import { Circle } from "better-react-spinkit";

const Loader = () => {
  return (
    <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
      <div>
        <Image
          src={"/Images/whatsapp.svg"}
          width={200}
          height={200}
          alt="App Logo"
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
};

export default Loader;
