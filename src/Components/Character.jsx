import React from "react";
import P from '../assets/characters/Persephone.webp';
import H from '../assets/characters/hades.webp';
import Z from '../assets/characters/Zeus.webp';
import Po from '../assets/characters/Poseidon.webp';
import E from '../assets/characters/Eros.webp';
import Hm from '../assets/characters/Hermes.webp';

const characters = [
    {
      "name": "Persephone",
      "image": P,
      "description": "The Goddess of Spring. Initially portrayed as an innocent and naive young woman, her character develops dramatically as she faces more challenges. She is depicted with pink skin and a generous heart."
    },
    {
      "name": "Hades",
      "image": H,
      "description": "The God of the Underworld. Depicted as a handsome blue man in a business suit, Hades runs the Underworld Corporation and plays a significant role in the Six Traitor Dynasty."
    },
    {
      "name": "Zeus",
      "image": Z,
      "description": "The King of the Gods. Zeus is depicted as a yellow-skinned man with long, straight hair, known for his promiscuity and egotism. His actions often bring chaos to Olympus."
    },
    {
      "name": "Poseidon",
      "image": Po,
      "description": "The God of the Sea. Poseidon is Zeus's brother, often characterized by his carefree temperament. He is portrayed with green skin and long, wavy hair."
    },
    {
      "name": "Eros",
      "image": E,
      "description": "The God of Love. Eros is a strong, maroon-skinned young man and one of Persephone’s best friends. He helps others in romantic relationships while facing his own challenges."
    },
    {
      "name": "Hermes",
      "image": Hm,
      "description": "The God of Speed and Travel. Depicted as an athletic man in red, Hermes works as a soul collector for Hades and is an old friend of Persephone."
    },
  ];

const Characters = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-widest">Main Characters</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4">
        {characters.map((character, index) => (
          <div 
            key={index} 
            className="relative group shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img src={character.image} alt={character.name} className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
                <p className="text-white text-sm">{character.description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{character.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;