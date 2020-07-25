import resume from "../assets/images/Dan_Weikart_Resume_6-25-2020.pdf";

function LinkData(
    url,
    iconName,
    iconType,
    name,
    color
  ) {
    this.url = url;
    this.iconName = iconName;
    this.iconType = iconType;
    this.name = name;
    this.color = color;

  }

  const emailAddress = new LinkData(
    "mailto: danmweikart@gmail.com",
    "envelope-open-text",
    "fas",
    "Email",
    "#3e5de8"
  );

  const gitHub = new LinkData(
    "https://github.com/thedanitor",
    "github",
    "fab",
    "Github",
    "white"
  );

  const linkedIn = new LinkData(
    "https://www.linkedin.com/in/dan-weikart/",
    "linkedin",
    "fab",
    "linkedIn",
    "#0077b5"
  );

  const resumePdf = new LinkData(
    resume,
    "file-pdf",
    "fas",
    "Resume",
    "#e81b0a"
  );

  let linkList = [ emailAddress, gitHub, linkedIn, resumePdf ]

  export default linkList;