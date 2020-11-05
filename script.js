const messages = {
  nickName: ['Daredevil', 'Scaredy-Cat', 'Couch-Potato', 'The-Impaler'],
  secondPart: ['Explore your new personality!','Maybe you should try and hide this new personality.','Don\'t be afraid of your new personality.'],
  thirdPart: ['ten years','rest of your life','a couple of days'],
};

const personality = {
  Daredevil: 'insane and curious',
  'Scaredy-Cat': 'fearful and timid',
  'Couch-Potato': 'beyond lazy',
  'The-Impaler': 'extremely violent', 
};

const generateRandomMessage = () => {
  let randNumOne = Math.floor(Math.random()*3);
  let randNumTwo = Math.floor(Math.random()*3);
  let randNumThree = Math.floor(Math.random()*3);
  console.log(Messages.firstPart[randNumOne] + Messages.secondPart[randNumTwo] + Messages.thirdPart[randNumThree]);
};

generateRandomMessage();