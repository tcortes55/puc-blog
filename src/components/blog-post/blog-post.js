import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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

function BlogPost({ title, description }) {
    return (
        <Container>
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>
        </Container>
    )
}

export default BlogPost;