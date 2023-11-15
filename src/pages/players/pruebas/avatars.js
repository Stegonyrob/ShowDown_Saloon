
const avatarContainer = document.querySelector('.container-icons');

// Array de rutas de imagen de los avatares
const avatarImages = [
 
"../../assets/img/monstruitos/monst_1_cow.svg" ,
 "../../assets/img/monstruitos/monst_2_cow.svg" ,
 "../../assets/img/monstruitos/monst_3_cow.svg",
 "../../assets/img/monstruitos/monst_4_cow.svg", 
 "../../assets/img/monstruitos/monst_5_cow.svg",
 "../../assets/img/monstruitos/monst_6_cow.svg",
 "../../assets/img/monstruitos/monst_7_cow.svg",
  "../../assets/img/monstruitos/monst_8_cow.svg" ,
  "../../assets/img/monstruitos/monst_9_cow.svg",
  "../../assets/img/monstruitos/monst_10_cow.svg",
  "../../assets/img/monstruitos/monst_11_cow.svg",
  "../../assets/img/monstruitos/monst_12_cow.svg",
 "../../assets/img/monstruitos/monst_13_cow.svg",

  "../../assets/img/monstruitos/monst_1_ind.svg",
  "../../assets/img/monstruitos/monst_2_ind.svg" ,
  "../../assets/img/monstruitos/monst_3_ind.svg" ,
  "../../assets/img/monstruitos/monst_4_ind.svg",
  "../../assets/img/monstruitos/monst_5_ind.svg",
  "../../assets/img/monstruitos/monst_6_ind.svg" ,
  "../../assets/img/monstruitos/monst_7_ind.svg",
  "../../assets/img/monstruitos/monst_8_ind.svg",
  "../../assets/img/monstruitos/monst_9_ind.svg",
  "../../assets/img/monstruitos/monst_10_ind.svg",
    "../../assets/img/monstruitos/monst_12_ind.svg",
  "../../assets/img/monstruitos/monst_13_ind.svg" ,
]
// Agrega los avatares al contenedor
avatarImages.forEach(imageSrc => {
    const avatarElement = document.createElement('div');
    avatarElement.classList.add('icons');
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = "avatar";
    avatarElement.appendChild(imgElement);
    avatarContainer.appendChild(avatarElement);
  });
