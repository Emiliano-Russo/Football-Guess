import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function ScreenGameNav() {
  const nav = useNavigate();

  const navStore = [
    {
      label: "País",
      nav: "/game/country",
    },
    {
      label: "Edad",
      nav: "/game/age",
    },
    {
      label: "Nombre",
      nav: "/game/name",
    },
    {
      label: "Liga",
      nav: "/game/ligue",
    },
    {
      label: "Club",
      nav: "/game/club",
    },
    {
      label: "Posición",
      nav: "/game/position",
    },
  ];

  return (
    <>
      {navStore.map((v) => {
        return (
          <Button
            style={{ width: "120px" }}
            onClick={() => {
              nav(v.nav);
            }}
          >
            {v.label}
          </Button>
        );
      })}
    </>
  );
}
