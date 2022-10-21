let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

let renderGlasses = () => {
  let content = "";

  dataGlasses.map(
    (item, index) =>
      (content += `<div onclick="testGlasses(${index})" class="col-4" style="background: url(${item.src}) center / 100% no-repeat; height: 130px"></div>`)
  );

  document.querySelector("#vglassesList").innerHTML = content;
};

renderGlasses();

window.testGlasses = (index) => {
  let object = dataGlasses[index];

  //show info
  let contentInfo = `<div id="name">${object.name} - ${object.brand} (${object.color})</div>
  <div class="price" style="margin: 5px 0 10px">
    <span
      style="display: inline-block; background-color: red; border-radius: 5px; padding: 5px; font-size: 16px"
      id="price"
    >$${object.price}</span
    ><span style="color: green; margin-left: 10px">Stocking</span>
  </div>
  <div style="font-size: 17px" id="discription">${object.description}</div>`;

  document.querySelector("#glassesInfo").innerHTML = contentInfo;
  document.querySelector("#glassesInfo").style.display = "block";

  //hien thi kinh
  document.querySelector("#imageGlasses").style.display = "block";
  document.querySelector(
    "#imageGlasses"
  ).style.background = `url(${object.virtualImg}) center / 100% no-repeat`;
};

window.removeGlasses = (value) => {
  if (value === false) {
    document.querySelector("#imageGlasses").style.display = "none";
  } else {
    document.querySelector("#imageGlasses").style.display = "block";
  }
};
