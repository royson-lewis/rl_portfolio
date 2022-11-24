import React, {PropsWithChildren} from "react";
import HeaderMain from './header/main'
import FooterMain from "./footer/footer";

const LayoutMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderMain isMobile={true} />
      <main>{children}</main>
      {/*<FooterMain />*/}
    </>
  )
}

export default LayoutMain
