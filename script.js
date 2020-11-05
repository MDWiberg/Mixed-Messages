const Messages = {
  firstPart: ['It may', 'It may not', 'It certainly will'],
  secondPart: [' be',' happen',' not happen'],
  thirdPart: [' soon.',' way in the future.',' any second.']
};

const generateRandomMessage = () => {
  let randNumOne = Math.floor(Math.random()*3);
  let randNumTwo = Math.floor(Math.random()*3);
  let randNumThree = Math.floor(Math.random()*3);
  console.log(Messages.firstPart[randNumOne] + Messages.secondPart[randNumTwo] + Messages.thirdPart[randNumThree]);
};

generateRandomMessage();