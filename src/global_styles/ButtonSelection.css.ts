const btnSelectedColorBackground =
  "radial-gradient( 100% 100% at 90% 0%, #8931AB 0%, #1168FF 100% )";
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
