import React from 'react';
import './App.css';
import Menu from './components/menu';
import Intro from './components/intro';
import styled from 'styled-components';
import BlogPost from './components/blog-post';

const AppContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

const IntroContainer = styled.div`
  background-color: rgb(0,5,79);
`;

const BlogPosts = [
  {
    title: "Título do primeiro post",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
  },
  {
    title: "Título do segundo post",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
  },
  {
    title: "Título do terceiro post",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
  }
];

const TitleLeft = styled.h1`
  text-align: left;
`;


function App() {
  const links = [
    {
      name: 'Blog',
      url: 'https://www.example.com/item1'
    },
    {
      name: 'Sobre',
      url: 'https://www.example.com/item2'
    },
    {
      name: 'Descrição',
      url: 'https://www.example.com/item3'
    }
  ];

  const title = "Seu nome";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.";
  const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg";

  return (
    <div className="App">
      <AppContainer>
        <IntroContainer>
          <Menu links={links}></Menu>
          <Intro title={title} description={description} imageUrl={imageUrl}></Intro>
        </IntroContainer>
        <div>
          <TitleLeft>Últimas do blog:</TitleLeft>
          {BlogPosts.map((item, index) => (
              <React.Fragment key={index}>
                  <BlogPost title={item.title} description={item.description}></BlogPost>
              </React.Fragment>
          ))}
        </div>
      </AppContainer>
    </div>
  );
}

export default App;
