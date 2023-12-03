import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 30px;
  margin-left: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: 50px;
`;

const Title = styled.h2`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: left;
  margin-top: 0px;
  margin-bottom: 20px;
`;

function Intro({ title, description, imageUrl }) {
    return (
        <Container>
            <Image
                src={imageUrl}
                alt="Profile picture"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>
        </Container>
    )
}

export default Intro;