import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeadset, FaPencilRuler, FaCode, FaTools, FaCog } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const HeroSection = styled.div`
  position: relative;
  min-height: 120vh;
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/audiovideo.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0;
  padding-left: 5%;
  z-index: 10;
  
  @media (max-width: 1200px) {
    padding-left: 6%;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    text-align: center;
  }
`;

const MainHeading = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #1a237e;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  position: relative;
  padding-left: 45px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, #1a237e, transparent);
    transform: scaleX(0);
    animation: lineGrow 0.8s ease-out 0.5s forwards;
  }
  
  @keyframes lineGrow {
    to { transform: scaleX(1); }
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding-left: 0;
    margin-bottom: 0.5rem;
    
    &:before {
      display: none;
    }
  }
`;

const SubHeading = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 500;
  color: #1a237e;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 600px;
  background: linear-gradient(120deg, #1a237e, #2b4162);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #2b4162;
  margin: 1.5rem 0 2.5rem;
  max-width: 450px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.2px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 1rem auto 2rem;
    text-align: center;
  }
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 2.5rem;
  background-color: transparent;
  border: 1px solid #60a5fa;
  color: #60a5fa;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(96, 165, 250, 0.1);
    transform: skewX(-20deg);
    transition: 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:hover {
    background-color: #60a5fa;
    color: #ffffff;
    box-shadow: 0 5px 15px rgba(96, 165, 250, 0.3);
    transform: translateY(-2px);
  }

  &:after {
    content: '→';
    margin-left: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(5px);
  }
`;

const ContentSection = styled.section`
  padding: 6rem 0;
  background: #f8faff;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const TextContent = styled.div`
  h2 {
    color: #60a5fa;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      text-align: center;
    }
    
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

const Image = styled.img.attrs({
  loading: 'lazy',
})`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const ServicesSection = styled.section`
  padding: 6rem 5%;
  background: #fafcff;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #60a5fa;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = memo(styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid rgba(96, 165, 250, 0.08);
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 15px 35px rgba(96, 165, 250, 0.08);
  }
  
  svg {
    font-size: 2.5rem;
    color: #60a5fa;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: #60a5fa;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    svg {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
`);

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }
`;

const SolutionCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 8px 30px rgba(96, 165, 250, 0.08);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${SolutionCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    color: #60a5fa;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
  
  p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ProcessSection = styled.section`
  padding: 6rem 5%;
  background: #fafcff;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProcessCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.03);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 8px 30px rgba(96, 165, 250, 0.06);
  }
  
  &::before {
    content: "${props => props.number}";
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    background: #60a5fa;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: center;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ProcessTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProcessDescription = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SolutionsSection = styled.section`
  background: #f8faff;
  padding: 6rem 5%;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const AudioVideo = () => {
  return (
    <>
      <Helmet>
        <title>Audio Visual Solutions in Dubai | Professional AV Systems & Integration</title>
        <meta name="description" content="Transform your space with state-of-the-art audio visual solutions in Dubai. Professional AV consulting, design, installation & maintenance services for businesses." />
        <meta name="keywords" content="audio visual solutions dubai, AV systems, AV integration, audio video solutions, meeting room solutions, smart classroom, auditorium solutions" />
        <link rel="canonical" href="https://yourwebsite.com/audio-video" />
        <meta property="og:title" content="Audio Visual Solutions in Dubai | Professional AV Systems" />
        <meta property="og:description" content="Transform your space with state-of-the-art audio visual solutions in Dubai. Professional AV consulting, design, installation & maintenance services." />
        <meta property="og:url" content="https://yourwebsite.com/audio-video" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <span className="text-blue-400 mr-2">★</span>
            <span className="text-white/90 text-sm font-medium">Leading AV Solutions Provider</span>
          </motion.div>

          <h1>
            <MainHeading>Professional Audio Visual Solutions Dubai</MainHeading>
            <SubHeading>Transform Spaces Through Advanced AV Technology</SubHeading>
          </h1>
          <Description>
            Elevate your environment with state-of-the-art audiovisual solutions. 
            We blend innovative technology with refined design for exceptional experiences.
          </Description>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CtaButton to="/contact">
              Get Started
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </CtaButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <main>
        <ContentSection>
          <Grid>
            <TextContent>
              <h2>Leading Audio Video Solutions Provider in Dubai</h2>
              <p>
                In today's fast-paced digital age, audio visual solutions for business have 
                become an integral part of our lives. From captivating presentations in 
                boardrooms to mind-blowing audio experiences at concerts and events, 
                AV technology has transformed the way we communicate and engage 
                with our surroundings.
              </p>
              <p>
                AV solutions, also known as audio visual solutions, refer to technologies 
                and systems that combine both audio and visual components to provide 
                a multimedia experience. These solutions are used in various settings, 
                including business, education, entertainment, and communication. GS-IT, 
                as one of the established audio visual equipment suppliers in Dubai 
                delivers AV solutions that foster captivating, real-time interactions. With 
                audio visual technology, we facilitate immersive experiences to engage, 
                inform, and inspire the target audience.
              </p>
            </TextContent>
            <Image 
              src="src/assets/img/audioright.jpg" 
              alt="Professional Audio Visual Setup in Dubai Meeting Room"
            />
          </Grid>
        </ContentSection>
        
        <ServicesSection>
          <SectionTitle>AV Solutions that Elevate Engagement</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <FaHeadset />
              <h3>AV Consulting Services</h3>
              <p>Collaboration and assessment of client requirements to improve their existing audio-video technology.</p>
            </ServiceCard>
            
            <ServiceCard>
              <FaPencilRuler />
              <h3>AV Design Services</h3>
              <p>Customized AV designs that ensure optimal performance and blend smoothly into client infrastructure.</p>
            </ServiceCard>
            
            <ServiceCard>
              <FaCode />
              <h3>AV Programming</h3>
              <p>Custom programming to develop control systems and intuitive interfaces for the easy operation of AV systems.</p>
            </ServiceCard>
            
            <ServiceCard>
              <FaTools />
              <h3>AV Installation & Integration</h3>
              <p>Professional installation and integration of AV equipment for seamless functionality and regulatory compliance.</p>
            </ServiceCard>
            
            <ServiceCard>
              <FaCog />
              <h3>AV Support & Maintenance</h3>
              <p>Ongoing support and maintenance to resolve any concerns of clients and assure the AV system's performance.</p>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>
        
        <SolutionsSection>
          <SectionTitle>Explore Our Innovative Audio Video Solutions</SectionTitle>
          <SolutionsGrid>
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/meeting-room.jpg" 
                  alt="Meeting Room Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>Meeting Room Solutions</h3>
                <p>Streamline meetings and collaboration in rooms of all sizes with innovative solutions from our comprehensive product suite to communicate effectively and enhance productivity.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/smart-classroom.jpg" 
                  alt="Smart Classroom Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>Smart Classroom Solutions</h3>
                <p>Implement smart devices such as interactive white boards, video walls, and advanced audio systems to foster an engaging and interactive modern educational environment.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/auditorium.jpg" 
                  alt="Auditorium Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>Auditorium Solutions</h3>
                <p>Captivate the audience during large-scale events and presentations with enterprise-grade projection screens, highly impactful sound systems, and advanced lighting techniques.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/bgm.jpg" 
                  alt="BGM Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>BGM Solutions</h3>
                <p>Strategically placed background music systems, such as high-quality speakers or music players, that create the perfect ambiance and set the mood in any space.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/pa-va.jpg" 
                  alt="PA and VA Systems"
                />
              </CardImage>
              <CardContent>
                <h3>PA and VA Systems</h3>
                <p>Innovative and versatile Public Address and Voice Alarm systems to ensure clear communication across large areas, whether it is a metro station, stadium, or institution.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/home-cinema.jpg" 
                  alt="Home Cinema"
                />
              </CardImage>
              <CardContent>
                <h3>Home Cinema</h3>
                <p>Experience the ultimate cinematic experience at home with home theatre systems that offer high-definition displays, high fidelity sound systems, and cinematic lighting setups.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/control-center.jpg" 
                  alt="Command & Control Center Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>Command & Control Center Solutions</h3>
                <p>Centralized AV systems customized to meet the needs of the client's control center help improve operational efficiency through real-time monitoring and communication.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/video-wall.jpg" 
                  alt="LED & Video Wall Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>LED & Video Wall Solutions</h3>
                <p>High-impact visual displays that help capture audience attention and are perfect for dynamic presentations, showcasing information, and branding in a visually appealing manner.</p>
              </CardContent>
            </SolutionCard>
            
            <SolutionCard>
              <CardImage>
                <img 
                  src="/src/assets/img/solutions/crisis-management.jpg" 
                  alt="Crisis Management Solutions"
                />
              </CardImage>
              <CardContent>
                <h3>Crisis Management Solutions</h3>
                <p>Handle emergencies efficiently with reliable audio video solutions such as advanced communication systems, real-time data display, and control centers that enable prompt response.</p>
              </CardContent>
            </SolutionCard>
          </SolutionsGrid>
        </SolutionsSection>
        
        <ProcessSection>
          <SectionTitle>Streamlined AV Installation Process for Maximum Efficiency</SectionTitle>
          <ProcessGrid>
            <ProcessCard number="1">
              <ProcessTitle>AV Consulting</ProcessTitle>
              <ProcessDescription>
                We work closely with clients to understand their specific AV needs and offer the most fitting recommendations.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard number="2">
              <ProcessTitle>Solution Design</ProcessTitle>
              <ProcessDescription>
                We craft a detailed plan that outlines the layout, elements and implementation of the AV system customized to the client's needs.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard number="3">
              <ProcessTitle>Estimation</ProcessTitle>
              <ProcessDescription>
                Our team submits a transparent and detailed quote with accurate cost estimates and project timelines for client approval.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard number="4">
              <ProcessTitle>Project Execution</ProcessTitle>
              <ProcessDescription>
                Skilled technicians at GS-IT install the AV equipment with precision and professionalism according to the approved plan.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard number="5">
              <ProcessTitle>Quality Check</ProcessTitle>
              <ProcessDescription>
                Meticulously monitor and evaluate the performance of installed AV solutions to ensure they function optimally and efficiently.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard number="6">
              <ProcessTitle>Documentation and Training</ProcessTitle>
              <ProcessDescription>
                We provide user manuals, related documents, and staff training for the proper handling of the installed AV equipment.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard number="7">
              <ProcessTitle>Maintenance</ProcessTitle>
              <ProcessDescription>
                Through regular check-ups, updates, and troubleshooting, we address every issue to keep the system in top condition.
              </ProcessDescription>
            </ProcessCard>
          </ProcessGrid>
        </ProcessSection>
      </main>
    </>
  );
};

export default AudioVideo;
