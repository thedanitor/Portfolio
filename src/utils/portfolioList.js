// import aqirImg from "../../public/images/aqir_home_screen_4-3.png";
// import aqirWide from "../../public/images/aqir_home_screen_wide.png";
import aqirImg from "../assets/images/aqir_home_screen_4-3.png";
import aqirWide from "../assets/images/aqir_home_screen_wide.png";









function ProjectData(name, image, imageLarge, tech, description, webUrl, githubUrl) {
    this.name = name;
    this.image = image;
    this.imageLarge = imageLarge;
    this.tech = tech;
    this.description = description;
    this.webUrl = webUrl;
    this.githubUrl = githubUrl;
};

const aqirProject = new ProjectData(
    "AQIR",
    aqirImg,
    aqirWide,
    "HTML / CSS / JavaScript / MySQL / Node / Express / Handlebars / Bulma",
    "AQIR is an exclusive retail website that allows users to buy and sell products from the comfort of their home. Just sign up, login, and add or sell products with a community of users from around the world.",
    "https://thawing-castle-93200.herokuapp.com/",
    "https://github.com/ngoudeau2012/project_aqir"
    )

let portfolioList = [aqirProject];

export default portfolioList;