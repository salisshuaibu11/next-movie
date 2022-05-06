import { useState } from "react";

const AppHeader = ({ className }) => {
  const [opened, setOpened] = useState(false);

  const openMenuHandler = () => {
    setOpened(true);
  }

  const closeMenuHandler = () => {
    setOpened(false);
  }

  return (
    <div className={className}>
      <div>Burger Header</div>
      <div>Burger Menu</div>
    </div>
  )
}

export default AppHeader;