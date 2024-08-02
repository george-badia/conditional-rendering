import React from 'react';
import ImageCard from './ImageCard';
import './App.css'; 

function Home() {
  const cardData = [
    { id:1,
      imageSrc: 'https://img.freepik.com/premium-photo/kids-children-logo-little-girl-with-afro-hair-yellow-jacket_761066-167954.jpg?w=740',
      title: 'tom',
      description: 'Thus far has come.'
    },
    {id:2,
      imageSrc: '',
      title: 'jerry',
      description: 'Thus thee going far.'
    }
  ];

  return (
    <div className="home">
      {cardData.map  ((card, id) => (
        <ImageCard
          key={id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Home;
