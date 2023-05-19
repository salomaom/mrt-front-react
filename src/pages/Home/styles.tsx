import { styled } from "@configs/theme.config";

export const Main = styled("div", {
  display: "flex",
});

export const ActionsContainer = styled("div", {
  width: "100%",
  backgroundColor: "$white",
  margin: "$2",
  borderRadius: "$3",
  padding: "$3",
});

export const ActionsPlaceHolder = styled("h1", {
  textAlign: "center",
  paddingTop: "45%",
  backgroundColor: "#00000008",
  height: "100%",
});
