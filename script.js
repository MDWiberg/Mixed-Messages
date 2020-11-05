// Object to hold random parts necessary for the output message
const messages = {
  nickName: ['Daredevil', 'Scaredy-Cat', 'Couch-Potato', 'The-Impaler'],
  action: ['Explore your new personality!','Maybe you should try and hide this new personality.','Don\'t be afraid of your new personality.'],
  timeline: ['ten years','rest of your life','a couple of days'],
};

// Object to hold personalities related to the specific nickname
const personality = {
  Daredevil: 'down for anything',
  'Scaredy-Cat': 'fearful and timid',
  'Couch-Potato': 'beyond lazy',
  'The-Impaler': 'extremely violent', 
};

// Generate random number accepting a number parameter, in this case the current array length
const randomNum = (num) => {
  let randNum = Math.floor(Math.random()*num);
  return randNum;
};

// Generate message content parts and log the full message output to the screen
const generateRandomMessage = () => {
let messageContent = [];
  for(let key in messages) {
    let keyValue = messages[key];
    let randIndex = randomNum(keyValue.length);
    messageContent.push(keyValue[randIndex]);
  };
  console.log(`Your new nickname is ${messageContent[0]} and you are now ${personality[messageContent[0]]}.\n${messageContent[1]}\nYou are stuck this way for ${messageContent[2]}.`);
};

generateRandomMessage();