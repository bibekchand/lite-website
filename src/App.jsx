import { useState } from 'react'
import Scram from './Scram.jsx'
import ProfileCard from './ProfileCard.jsx'
import image from './image.jpg'
import PillNav from './PillNav';
import logo from './image.jpg';
import Particles from './Particles';
function App() {

  return (
    <>

        <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={1000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
        />
</div>
      <div className="flex justify-center bg-black mydiv">
                <PillNav
                  logo={logo}
                  logoAlt="Company Logo"
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Services', href: '/services' },
                    { label: 'Contact', href: '/contact' }
                  ]}
                  activeHref="/"
                  className="custom-nav"
                  ease="power2.easeOut"
                  baseColor="#000000"
                  pillColor="#ffffff"
                  hoveredPillTextColor="#ffffff"
                  pillTextColor="#000000"
                  theme="light"
                  initialLoadAnimation={false}
                />
      </div>
        <Scram
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique pariatur dignissimos porro eius quam doloremque 
          et enim velit nobis maxime.
        </Scram>
        <ProfileCard
          name="Bibek"

          title="Software Engineer"

          handle="bibek"

          status="Online"

          contactText="Contact"

          avatarUrl={image}

          showUserInfo={true}

          enableTilt={true}

          enableMobileTilt={false}

          onContactClick={() => console.log('Contact clicked')}

          showIcon

          showBehindGlow

          behindGlowColor="rgba(125, 190, 255, 0.67)"

          customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
    </>
  )
}

export default App
