export const btnSelectedColorBackground =
  "linear-gradient(124deg, rgba(0,48,255,1) 0%, rgba(32,255,241,1) 100%)";
const letterColor = "white";

export function getStyles(isSelected) {
  return {
    // background: btnSelected == val.char ? btnSelectedColorBackground : "gray",
    background: isSelected ? btnSelectedColorBackground : "gray",
    color: letterColor,
    border: "1px solid white",
    width: "150px",
  };
}
