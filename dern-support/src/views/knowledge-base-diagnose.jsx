import React from 'react'

import { Helmet } from 'react-helmet'

import WaysOfDiagnoses from '../components/ways-of-diagnoses'
import HardwareFixes from '../components/hardware-fixes'
import './knowledge-base-diagnose.css'

const KnowledgeBaseDiagnose = (props) => {
  return (
    <div className="knowledge-base-diagnose-container">
      <Helmet>
        <title>Dern-Support</title>
        <meta
          property="og:title"
          content="Knowledge-Base-Diagnose - Dern-Support"
        />
      </Helmet>
      <header data-role="Header" className="knowledge-base-diagnose-header">
        <div className="knowledge-base-diagnose-nav"></div>
        <h1 className="knowledge-base-diagnose-text">Dern-Support</h1>
      </header>
      <div className="knowledge-base-diagnose-container1">
        <div className="knowledge-base-diagnose-container2">
          <div className="knowledge-base-diagnose-container3">
            <h1 className="knowledge-base-diagnose-text1">
              How Can We Help You?
            </h1>
            <span className="knowledge-base-diagnose-text2">
              Have A Question? Search about it!
            </span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="knowledge-base-diagnose-textinput input"
          />
          <svg viewBox="0 0 1024 1024" className="knowledge-base-diagnose-icon">
            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </div>
      </div>
      <div className="knowledge-base-diagnose-container4"></div>
      <h1 className="knowledge-base-diagnose-text3">Relevant Posts</h1>
      <div className="knowledge-base-diagnose-blog">
        <div className="knowledge-base-diagnose-container5">
          <WaysOfDiagnoses
            title="Slow Performance"
            imageSrc="https://images.unsplash.com/photo-1600267147646-33cf514b5f3e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fFRlc3Rpbmd8ZW58MHx8fHwxNzExNzI3ODQ2fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            description="Check for background processes consuming resources using Task Manager (Ctrl + Shift + Esc on Windows)"
            rootClassName="rootClassName10"
          ></WaysOfDiagnoses>
        </div>
        <WaysOfDiagnoses
          title="Internet Connection Issues"
          imageSrc="https://images.unsplash.com/photo-1705948354393-802ff8c73936?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fENoZWNraW5nJTIwcGN8ZW58MHx8fHwxNzExNzI3ODc2fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          description="Check if other devices on the same network are experiencing similar issues to determine if it's a network-wide problem or isolated to the computer."
          rootClassName="rootClassName6"
        ></WaysOfDiagnoses>
      </div>
      <div className="knowledge-base-diagnose-blog1">
        <div className="knowledge-base-diagnose-container6"></div>
        <div className="knowledge-base-diagnose-container7">
          <div className="knowledge-base-diagnose-container8">
            <HardwareFixes
              title="Faulty RAM (Random Access Memory)"
              description="Check for physical damage to the RAM modules such as bent pins or visible signs of corrosion."
              rootClassName="hardware-fixes-root-class-name"
            ></HardwareFixes>
            <HardwareFixes
              title="Overheating CPU (Central Processing Unit)"
              imageSrc="https://images.unsplash.com/photo-1555589228-135c25ae8cf5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxSZXBhaXJpbmclMjBQQ3xlbnwwfHx8fDE3MTE3Mjg2MzV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Ensure that the CPU fan is functioning properly by visually inspecting it while the computer is running or listening for abnormal noises."
              rootClassName="hardware-fixes-root-class-name5"
            ></HardwareFixes>
            <HardwareFixes
              title="Failing Hard Drive"
              imageSrc="https://images.unsplash.com/photo-1551642044-b5e65d8a7fac?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxSZXBhaXJpbmclMjBQQ3xlbnwwfHx8fDE3MTE3Mjg2MzV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Backup important data immediately if signs of hard drive failure are detected, and consider replacing the hard drive to prevent data loss."
              rootClassName="hardware-fixes-root-class-name4"
            ></HardwareFixes>
          </div>
          <button
            type="button"
            className="knowledge-base-diagnose-button button"
          >
            <span>
              <span>Load More</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <footer className="knowledge-base-diagnose-footer">
        <h1 className="knowledge-base-diagnose-text7">Dern-Support</h1>
        <span className="knowledge-base-diagnose-text8">
          © 2024 Dern-Support, All Rights Reserved.
        </span>
        <div className="knowledge-base-diagnose-icon-group">
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              data-thq-animate-on-reveal="true"
              className="knowledge-base-diagnose-icon2"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </animate-on-reveal>
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              data-thq-animate-on-reveal="true"
              className="knowledge-base-diagnose-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </animate-on-reveal>
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 602.2582857142856 1024"
              data-thq-animate-on-reveal="true"
              className="knowledge-base-diagnose-icon6"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </animate-on-reveal>
        </div>
      </footer>
    </div>
  )
}

export default KnowledgeBaseDiagnose
