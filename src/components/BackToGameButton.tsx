import { Button, ButtonProps } from "antd";
import { useNavigate } from "react-router-dom";

export const BackToGameButton = () => {
  const nav = useNavigate();

  return (
    <Button
      style={{ position: "absolute", top: "10px", left: "50px" }}
      onClick={() => {
        nav("/game");
      }}
    >
      ← Atras
    </Button>
  );
};
