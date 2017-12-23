import puffyAvatar from './assets/puffy-1.jpg';
import sashaAvatar from './assets/sasha-1.jpeg'
const pimientaAvatar = require('./assets/pimienta-1.jpg');

const petData = [
	{
		name: "Pimienta",
		avatar: pimientaAvatar,
		info: {
			alias: "The Midnight Destroyer, Beast",
			breed: 'Jack Russell Terrier and Australian Cattle Dog',
			age: 7,
			dob: '05/08/2010',
			sex: 'Female, spayed',
			coat: 'Tricolor brown, black, and white with mottled spotting and black patches. Double coat. Very soft. Spay tattoo on belly.',
			build: '20 lbs with the frame of the “tall” variety of JRT, very sleek and lean',
			bio: "Pimienta is true to her breed with stubborn “terrierist” behavior and high intelligence.Some of her most notable exploits include escaping from the in -laws yard in less than 2 minutes and jumping on to a stool to get on the counter and steal food.She does not tolerate most dogs and so she is friendless."
		}
	},
	{ 
		name: "Sasha",
		avatar: sashaAvatar,
		info: {
			alias: "Sashimi, Sasha Fierce, Princess, Little Lioness, Night Fury",
			breed: "Domestic Shorthair",
			age: 3,
			dob: "04 / 13 / 2014",
			sex: "Female, spayed",
			coat: "Luxurious black and white tuxedo with pick paws and nose, smooth, shiny fur",
			build: "She was small and got big and now she is smaller but still has ample hunter’s pouch fat",
			bio: "Sasha is a prim and proper girl who was clearly royalty in a previous life.She does not tolerate any cuddling that is not on her terms.She will come to you if and will very vocally let you know when pets are needed.Her loves in life are sleeping and eating.Beware of her mouthful of sass!  Sasha does not get in trouble as she is far above such nefarious behavior, plus it would interfere with her day napping."
		}
	},
	{
		name: "Puffy",
		avatar: puffyAvatar,
		info: {
			alias: "P-Kitty, PaPuff, Taz",
			breed: "Domestic Medium hair / Feral",
			age: 1,
			dob: "unkown",
			sex: "Male, neutered",
			coat: "Puffy medium length fur, brown tabby with raccoon tail, very soft, neuter tattoo on belly and inner left pinna",
			build: "Lean and mean",
			bio: "Puffy was a feral kitten.As such he still has wild like behavior at a moment’s notice.However, he has learned to trust his humans and allows cuddling and handling.He still hates nail trims!  Puffy is not the brightest bulb in the tanning bed but he is great entertainment.Loves to play and run about.He also likes to escape into the neighbor’s yard making Olimpia walk around the block to retrieve him.He gave us a scare once when he got gastroenteritis and we suspected he ate a foreign body.However, it turns out his delicate tummy just cannot handle Friskies.It was also later discovered that the foreign body ingested was Pimienta when it was found in the yard after having been passed with a portion of Olimpia’s underwear.Puffy was also suspected of stealing 3 steaks of the counter but that was also later determined to have been Pimienta.He has, however, continues to get on the kitchen counter despite being yelled at and removed several times a day.He will steal food if given the opportunity.He is basically part dog.Puffy loves going outside to explore.He enjoys his meals very much and is a conoisseur of the “nip”."
		}
	},
	{
		name: "Booger",
		// avatar: 'booger-1.jpg',
		avatar: 'http://unsplash.it/500',
		info: {
			alias: "Young Booger Da Gawd, Boogzy Collins, Booger T. Flossington",
			breed: "Domestic Shorthair",
			age: 8,
			dob: "unknown",
			sex: "Male, neutered",
			coat: "Very soft cream and white coat with a faintly striped tail, neuter tattoo on belly and inner pinnae",
			build: "Lean and beefy",
			bio: "Booger was found on the hard streets of Lafayette, IN where he ruled his domain with an iron paw.Booger does not tolerate any other cat stepping on his territory.Even now, in his retirement home of Tigard, OR, he is known to get into a tussle whenever some young buck comes around trying to encroach.He has developed a healthy bromance with his new human Lucas, brother to his previous owner, Nathan.The love is big and strong.He also has a new canine friend named Manny, who, despite continual invasion of personal space, has proven to be a non - threat.Booger is living the life now that he has a cat door with unlimited access to the outdoors.He comes and goes as he pleases, often coming in only to eat or visit with his bro Lucas."
		}
	},
	{
		name: "Manny",
		// avatar: 'booger-1.jpg',
		avatar: 'http://unsplash.it/600',
		info: {
			alias: "Young Booger Da Gawd, Boogzy Collins, Booger T. Flossington",
			breed: "Domestic Shorthair",
			age: 8,
			dob: "unknown",
			sex: "Male, neutered",
			coat: "Very soft cream and white coat with a faintly striped tail, neuter tattoo on belly and inner pinnae",
			build: "Lean and beefy",
			bio: "Booger was found on the hard streets of Lafayette, IN where he ruled his domain with an iron paw.Booger does not tolerate any other cat stepping on his territory.Even now, in his retirement home of Tigard, OR, he is known to get into a tussle whenever some young buck comes around trying to encroach.He has developed a healthy bromance with his new human Lucas, brother to his previous owner, Nathan.The love is big and strong.He also has a new canine friend named Manny, who, despite continual invasion of personal space, has proven to be a non - threat.Booger is living the life now that he has a cat door with unlimited access to the outdoors.He comes and goes as he pleases, often coming in only to eat or visit with his bro Lucas."
		}
	}
];

const samplePetObject = {
	name: "Eddie",
	avatar: pimientaAvatar,
	info: {
		alias: "Vile beast",
		breed: 'Jack Russell Terrier',
		age: 35,
		dob: '01/01/1982',
		sex: 'Male, nutured',
		coat: 'Tricolor brown, black, and white.',
		build: '15 lbs with the slight frame',
		bio: "I was Marty's dog. His chair was my chair. Frasier is a dick. So is niles."
	}
}

export default petData;
export {samplePetObject};













