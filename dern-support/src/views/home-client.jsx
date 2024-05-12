import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Features from '../components/features'
import Reviews from '../components/reviews'
import './home-client.css'

const HomeClient = (props) => {
  return (
    <div className="home-client-container">
      <Helmet>
        <title>Dern-Support</title>
        <meta property="og:title" content="Home-Client - Dern-Support" />
      </Helmet>
      <header data-role="Accordion" className="home-client-header">
        <span className="home-client-text"><Link to="/HomeClient">Dern-Support</Link></span>
        <div className="home-client-separator"></div>
        <nav className="home-client-nav">
          <div className="home-client-container01">
            <NavigationLinks
            button1="Contact Us"
            button2="Support Request"
            button21="Knowledge Base"
            link1='/supportRequest'
            link2='/knowledgeBase'
            link3='/contact'
            rootClassName="rootClassName10"></NavigationLinks>
            <div className="home-client-container02">
              <span>Welcome, Client</span>
            </div>
          </div>
        </nav>
        <div
          data-role="AccordionHeader"
          className="home-client-accordion-header"
        >
          <svg viewBox="0 0 1024 1024" className="home-client-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className="home-client-accordion-content"
        >
          <div className="home-client-nav1">
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
        </div>
        <div className="home-client-separator1"></div>
      </header>
      <div className="home-client-hero">
        <h1 className="home-client-text02">
          <span className="home-client-text03">Let&apos;s Repair them!</span>
          <br></br>
        </h1>
        <span className="home-client-text05">
          <span>Dern-Support is an IT Support company,</span>
          <br></br>
          <span>
            {' '}
            offering solutions to all kinds of It Related issues and problems,
          </span>
          <br></br>
          <span>
            from small software issues, to complicated hardware issues
          </span>
          <br></br>
          <span> like Graphic Card failure and reparing.</span>
        </span>
        <div className="home-client-btn-group">
          <Link className="home-client-button button" to={"/supportRequest"} type>Submit A request!</Link>
          <Link className="home-client-button1 button" to={"/knowledgeBase"}>Learn More</Link>
        </div>
      </div>
      <div className="home-client-features">
        <h1 className="home-client-text13">All these impressive features</h1>
        <div className="home-client-container03">
          <Features
            title="Fast Repair"
            description="With the Fast Repair Feature, gone are the days of waiting hours or even days for your IT issues to be resolved. Our streamlined process ensures that your technical dilemmas are addressed promptly, minimizing disruption to your operations and maximizing productivity."
            rootClassName="rootClassName8"
          ></Features>
          <Features
            title="Cooperative Staff"
            description="Our Cooperative Staff Feature is more than just a service—it's a commitment to fostering genuine connections and understanding with every interaction. Here's how our team goes above and beyond to ensure your satisfaction"
            rootClassName="rootClassName9"
          ></Features>
          <Features
            title="Open 24/7"
            description="With our Open 24/7 Feature, you can count on us to be there for you around the clock, ready to tackle any technical challenge that comes your way. Here's how our 24/7 availability sets us apart"
            rootClassName="rootClassName10"
          ></Features>
          <Features
            title="Best Prices"
            description="We understand the importance of staying within budget without sacrificing quality. With our Best Prices Feature, you'll enjoy competitive pricing that ensures you get the most bang for your buck. We continually monitor the market to offer rates that are both fair and transparent."
            rootClassName="rootClassName11"
          ></Features>
        </div>
      </div>
      <div className="home-client-testimonial">
        <div className="home-client-container04">
          <h1 className="home-client-text14">
            <span>What they’re saying</span>
            <br></br>
            <span></span>
          </h1>
          <span className="home-client-text17">
            Explore testimonials from our satisfied clients and learn more about
            the quality of our services!
          </span>
          <div className="home-client-container05">
            <Reviews
              name="Jane Does"
              role="Designer"
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName6"
            ></Reviews>
            <Reviews
              name="Jane Doesn't"
              quote="Overall, my experience with Dern-Support surpassed all expectations, reaffirming their status as a premier IT solutions provider. Whether you're a small business owner or a tech-savvy individual, Dern-Support's proficiency, professionalism, and unwavering dedication make them the ideal partner for all your IT needs. I wholeheartedly recommend their services and look forward to availing myself of their expertise in the future."
              rootClassName="rootClassName7"
            ></Reviews>
            <Reviews
              name="Not Jane Doe"
              role="Graphic Engineer"
              quote="Customer satisfaction is clearly a top priority for Dern-Support. Their friendly and accommodating staff members go above and beyond to address concerns and provide personalized solutions tailored to the unique needs of each client. Whether it's offering technical advice, explaining repair procedures, or providing ongoing support, they foster a sense of trust and reliability that sets them apart from competitors."
              pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName8"
            ></Reviews>
          </div>
        </div>
      </div>
      <div className="home-client-stats">
        <div className="home-client-stat">
          <h1 className="home-client-text18">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="home-client-text21">Happy clients</span>
          <span className="home-client-text22">
            With a proven track record of successfully resolving IT issues for
            numerous clients, our dedicated team ensures smooth and efficient
            system operations.
          </span>
        </div>
        <div className="home-client-stat1">
          <h1 className="home-client-text23">
            <span>369</span>
          </h1>
          <span className="home-client-text25">PCs Repaired</span>
          <span className="home-client-text26">
            Over 360 PCs successfully serviced!
          </span>
        </div>
        <div className="home-client-stat2">
          <h1 className="home-client-text27">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="home-client-text30">Parts Replaced</span>
          <span className="home-client-text31">
            Over 500 PC parts replaced at competitive prices!
          </span>
        </div>
        <div className="home-client-stat3">
          <h1 className="home-client-text32">
            <span>24/7</span>
          </h1>
          <span className="home-client-text34">Support</span>
          <span className="home-client-text35">
            Available 24/7 for inquiries and support!
          </span>
        </div>
      </div>
      <div className="home-client-steps">
        <h1 className="home-client-text36">
          <span>Discover Our Process</span>
        </h1>
        <div className="home-client-container06">
          <div className="home-client-step">
            <div className="home-client-container07">
              <div className="home-client-line"></div>
              <div className="home-client-container08">
                <svg viewBox="0 0 1024 1024" className="home-client-icon02">
                  <path d="M804 678q38 18 38 58v8l-32 226q-2 24-20 39t-42 15h-290q-26 0-44-18l-212-212 34-34q14-14 34-14 2 0 5 1t5 1l146 30v-458q0-28 19-46t45-18 45 18 19 46v256h34q6 0 22 4zM384 480q-86-56-86-160 0-80 56-136t136-56 136 56 56 136q0 106-84 160v-160q0-44-32-75t-76-31-75 31-31 75v160z"></path>
                </svg>
              </div>
              <div className="home-client-line1"></div>
            </div>
            <div className="home-client-container09">
              <h1 className="home-client-text38">Get In Touch</h1>
            </div>
          </div>
          <div className="home-client-step1">
            <div className="home-client-container10">
              <div className="home-client-line2"></div>
              <div className="home-client-container11">
                <svg viewBox="0 0 1024 1024" className="home-client-icon04">
                  <path d="M170 470h684v84h-684v-84zM682 214l-170 170-170-170h128v-172h84v172h128zM342 810l170-170 170 170h-128v172h-84v-172h-128z"></path>
                </svg>
              </div>
              <div className="home-client-line3"></div>
            </div>
            <div className="home-client-container12">
              <h1 className="home-client-text39">Submit Support Request</h1>
            </div>
          </div>
          <div className="home-client-step2">
            <div className="home-client-container13">
              <div className="home-client-line4"></div>
              <div className="home-client-container14">
                <svg viewBox="0 0 1024 1024" className="home-client-icon06">
                  <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h468q50 0 62 42z"></path>
                </svg>
              </div>
              <div className="home-client-line5"></div>
            </div>
            <div className="home-client-container15">
              <h1 className="home-client-text40">Drop Your PC By</h1>
            </div>
          </div>
          <div className="home-client-step3">
            <div className="home-client-container16">
              <div className="home-client-line6"></div>
              <div className="home-client-container17">
                <svg viewBox="0 0 1024 1024" className="home-client-icon08">
                  <path d="M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416zM512 598.76c115.95 0 226.23-30.806 320-84.92-14.574 178.438-153.128 318.16-320 318.16-166.868 0-305.422-139.872-320-318.304 93.77 54.112 204.050 85.064 320 85.064zM256 352c0-53.019 28.654-96 64-96s64 42.981 64 96c0 53.019-28.654 96-64 96s-64-42.981-64-96zM640 352c0-53.019 28.654-96 64-96s64 42.981 64 96c0 53.019-28.654 96-64 96s-64-42.981-64-96z"></path>
                </svg>
              </div>
              <div className="home-client-line7"></div>
            </div>
            <div className="home-client-container18">
              <h1 className="home-client-text41">Happy PC!</h1>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-client-footer">
        <h1 className="home-client-text42">Dern-Support</h1>
        <span className="home-client-text43">
          © 2024 Dern-Support, All Rights Reserved.
        </span>
        <div className="home-client-icon-group">
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
              className="home-client-icon10"
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
              className="home-client-icon12"
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
              className="home-client-icon14"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </animate-on-reveal>
        </div>
      </footer>
    </div>
  )
}

export default HomeClient
