import {COLORS, FONT_SIZE} from "../../constants/theme.js";

export const styles = {

  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 50,
    justifyContent: "space-between"
  },

  containerLogo: {
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 23
  },

  input: {
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },

  footer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  footerLink: {
    color: COLORS.blue,
  }
}