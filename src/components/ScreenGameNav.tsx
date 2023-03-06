import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActualNav } from "../redux/screenSlice";

export function ScreenGameNav() {
  const nav = useNavigate();
  const [pathSelected, setPathSelected] = useState<string>("");
  const actualNav = useSelector((state: any) => state.screenSlice.actualNav);
  const dispatch = useDispatch();

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
            style={{
              width: "120px",
              background:
                actualNav == v.nav
                  ? "radial-gradient( 100% 100% at 70% 0%, #19A5A1 0%, #5468BB 90% )"
                  : "radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% )",
              color: "white",
            }}
            onClick={() => {
              dispatch(setActualNav(v.nav));
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
