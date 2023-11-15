 
  let avatars= [
  
    { id: '01', src: 'monst_1_cow.svg', name: 'cow-1' },
    { id: '02', src: 'monst_2_cow.svg', name: 'cow-2' },
    { id: '03', src: 'monst_3_cow.svg', name: 'cow-3' },
    { id: '04', src: 'monst_4_cow.svg', name: 'cow-4' },
    { id: '05', src: 'monst_5_cow.svg', name: 'cow-5' },
    { id: '06', src: 'monst_6_cow.svg', name: 'cow-6' },
    { id: '07', src: 'monst_7_cow.svg', name: 'cow-7' },
    { id: '08', src: 'monst_8_cow.svg', name: 'cow-8' },
    { id: '09', src: 'monst_9_cow.svg', name: 'cow-9' },
    { id: '10', src: 'monst_10_cow.svg', name: 'cow-10' },
    { id: '11', src: 'monst_11_cow.svg', name: 'cow-11' },
    { id: '12', src: 'monst_12_cow.svg', name: 'cow-12' },
    { id: '13', src: 'monst_13_cow.svg', name: 'cow-13' },
    { id: '14', src: 'monst_1_ind.svg', name: 'ind-1' },
    { id: '15', src: 'monst_2_ind.svg', name: 'ind-2' },
    { id: '16', src: 'monst_3_ind.svg', name: 'ind-3' },
    { id: '17', src: 'monst_4_ind.svg', name: 'ind-4' },
    { id: '18', src: 'monst_5_ind.svg', name: 'ind-5'},
    { id: '19', src: 'monst_6_ind.svg', name: 'ind-6' },
    { id: '20', src: 'monst_7_ind.svg', name: 'ind-7' },
    { id: '21', src: 'monst_8_ind.svg', name: 'ind-8' },
    { id: '22', src: 'monst_9_ind.svg', name: 'ind-9' },
    { id: '23', src: 'monst_10_ind.svg', name: 'ind-10' },
    { id: '24', src: 'monst_11_ind.svg', name: 'ind-11' } , 
    { id: '25', src: 'monst_12_ind.svg', name: 'ind-12' } , 
   

]

const gallery = document.querySelector('.gallery');

avatars.forEach(image => {
  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';
  imageCard.id = image.id;

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.name;
  img.className = 'image';

  const imageInfo = document.createElement('div');
  imageInfo.className = 'image-info';



  const imageName = document.createElement('span');
  imageName.className = 'image-name';
  imageName.textContent = image.name;

  imageInfo.appendChild(deleteIcon);
  imageInfo.appendChild(editIcon);
  imageInfo.appendChild(imageName);

  imageCard.appendChild(img);
  imageCard.appendChild(imageInfo);

  gallery.appendChild(imageCard);
});
