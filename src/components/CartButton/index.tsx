import React from "react";
import { AddIConCart, FabCartIcon } from "./styles";

function CartButton() {
  return (
    <FabCartIcon aria-label="cart-icon" size={"small"}>
      <AddIConCart />
    </FabCartIcon>
  );
}

export default CartButton;
