import "@styles/globals.css";
import { useState, useEffect } from "react";
import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";

function Application({ Component, pageProps }) {
  const [courierProps, setCourierProps] = useState({});
  useEffect(() => {
    setCourierProps({
      clientKey: "MjQwOTUyMDMtMGJiOS00ZDY1LWFhOGEtODRjMDUyNGI4MWUy",
      userId: "AYDRIAN10036"
    });
  }, []);
  return (
    <CourierProvider {...courierProps}>
      <Toast />
      <Component {...pageProps} />
    </CourierProvider>
  );
}

export default Application;
