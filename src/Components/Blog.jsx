import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.main`
  width: 100%;
  padding: 60px 20px;
  min-height: 100vh;
  background: #fcfcfc;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
  animation: ${slideUp} 0.8s ease-out;

  h1 {
    font-size: 2.8rem;
    color: #2d3748;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: #718096;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  animation: ${slideUp} 0.8s ease-out;
  border: 1px solid #f8f9fa;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 60%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 24px;

  h2 {
    font-size: 1.4rem;
    color: #2d3748;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
  color: #718096;
`;

const Button = styled.button`
  background-color: #f8f9fa;
  color: #4A5568;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #718096;
    color: white;
  }
`;

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'The Future of Web Development',
      category: 'Tech',
      date: 'Mar 15, 2024',
      author: 'Sarah Parker',
      content: 'Exploring upcoming trends and technologies...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      id: 2,
      title: 'Building Scalable Applications',
      category: 'Development',
      date: 'Mar 12, 2024',
      author: 'Mike Ross',
      content: 'Learn the best practices for creating scalable apps...',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800'
    },
    {
      id: 3,
      title: 'UI Design Principles',
      category: 'Design',
      date: 'Mar 10, 2024',
      author: 'Emma Wilson',
      content: 'Principles for user-friendly interfaces...',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800'
    }
  ]);

  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <>
      <Helmet>
        <title>Latest Blog Articles | Your Blog</title>
        <meta name="description" content="Discover insights from our experts on web development, scalability, and design." />
      </Helmet>

      <Container>
        <Header>
          <h1>Latest Articles</h1>
          <p>Insights from our expert team</p>
        </Header>

        <Grid>
          {posts.map((post, index) => (
            <Card key={post.id} $index={index}>
              <ImageContainer>
                <Image
                  src={post.image}
                  alt={post.title}
                  loading={index > 0 ? 'lazy' : 'eager'}
                />
              </ImageContainer>
              <Content>
                <h2>{post.title}</h2>
                <Meta>
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </Meta>
                <p>{post.content}</p>
                <Button onClick={() => handleReadMore(post)}>Read More</Button>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;