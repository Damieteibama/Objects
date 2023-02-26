//Question 1 Using Constructor method to create instagramPost() constructor function

class instagramPost {
    constructor(authorHandle, content, imglink, numberOfViews, numberOfLikes) {
        this.authorHandle = authorHandle
        this.content = content
        this.imglink = imglink
        this.numberOfViews = numberOfViews
        this.numberOfLikes = numberOfLikes
    }
}

//Question 2. Two Instagram posts objects from constructor function createdin question 1

const instagramPost1 = new instagramPost('da_mie_tee' ,'I have a very big God', "img/statobj/tree.png" , 200 , 50,);
const instagramPost2 = new instagramPost('damiwillsphotogrsphy' ,'Happy birthday to our amazing client', "img/statobj/tree.png" , 5000, 250,);

console.log(instagramPost1);
console.log(instagramPost2);

//Question 3. 

//a)
//creating an object representing Musa 
function createPerson(name, age , location){
    return{
        name:name,
        age:age,
        location : location
    }
}
const musa = createPerson('Musa Dawodu', 19 , 'Nigeria Lekki ,Lagos State' )
console.log(musa)

//b)
//creating an Object representing Musa's Jambscore
function createJambScores(eng, govt , lit, crk){
    return{
        eng:eng,
        govt:govt,
        lit : lit,
        crk :crk
    }
}
const musaJambScores = createJambScores(70, 85 , 82,94)
console.log(musaJambScores)

//adding musaJambscores Object as a property to musa Object
Object.assign(musa, musaJambScores);
console.log({musa})

//Question 4. Different ways you can clone an Object inclues;

// 1. Using Object.assign()

const firstPerson = {
    name : 'Damiete Ibama',
    age :  30,
    yearOfBirth : 1992,
    monthOfBirth :'April'
}
const secondPerson = Object.assign({}, firstPerson)
secondPerson.name = 'Daere Johnbull'
console.log({secondPerson})

// 2. Using the Spread Syntax ie ....
const thirdPerson = {...firstPerson};
thirdPerson.name = 'Vannesa Johnson'
console.log({thirdPerson});

// 3. Using method JSON.parse()
      //JSON - JavaScript Object Notation
const fourthPerson = (JSON.parse(JSON.stringify(firstPerson)));
fourthPerson.name = 'Olivia Williams';
console.log({fourthPerson});

//Question 5.  Using any of the enumeration methods taught in class (for..in or for...of), log out each of the presidential canditate in this format
   // 'Omoyele sowore is the presidential Candidate of AAC'

   const presidentialCandidates = {

    AAC : 'Omoyele Sowore',
    ACCORD : 'Christopher Imumolen',
    APC : 'Bola Ahmed Tinubu',
    LP : 'Peter Obi',
    NNPP : 'Rabiu Kwankwaso',
    PDP : 'Atiku Abubakar',

   }
   console.log(presidentialCandidates);
   // Using (for...in)

   for(const party in presidentialCandidates){
    
    console.log(`${presidentialCandidates[party]} is the presidential Candidate of ${party}`);
   
}


