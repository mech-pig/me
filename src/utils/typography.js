import Typography from "typography"
import "../fonts/iosevka-mechpig/webfont.css"

const typography = new Typography({
  title: "mechpig",
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Iosevka Mechpig Web",
    "monospace",
  ],
})

export default typography
