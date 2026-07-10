import { useState } from "react";
import Hamburguer from "hamburger-react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hamburguer size={30} toggled={open} toggle={setOpen} />
    </>
  );
}
