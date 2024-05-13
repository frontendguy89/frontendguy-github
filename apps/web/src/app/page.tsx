"use client";

import { useState, useReducer } from "react";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import {
  PaintBrushIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SkillBanner from "./components/SkillBanner";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

const initialMenuState = {
  isOpen: false,
  isClosed: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "isOpen":
      return { ...state, isOpen: false, isClosed: true };
    case "isClosed":
      return { ...state, isOpen: true, isClosed: false };
    default:
      return state;
  }
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialMenuState);

  function handleMenuClick() {}

  return (
    <>
      <div className="flex flex-wrap min-h-screen">
        <Navigation isNav={isOpen} />
        <div className={isOpen ? "ml-[25%]" : "m-auto"}>
          <Header onToggle={() => setIsOpen(!isOpen)} />
          <main className="px-6 py-2 max-w-6xl m-auto overflow-hidden bg-[#e6e6e6] dark:bg-[#66023c] dark:text-[#e6e6e6] text-[#363636]">
            <section className="flex flex-col text-center lg:text-left lg:flex-row gap-6 my-6 ">
              <CldImage
                alt="Profile Pic"
                width="320"
                height="320"
                priority
                src="wzxtrb8vcebw5drxxte5"
                className="rounded-full w-[320px] h-[320px] m-auto shadow-md shadow-[#333]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                viewport={{ once: true }}
              >
                <h1 className={robotoSlab.className}>Hello there&hellip;</h1>

                <p>
                  I've been called a UX Developer, a Frontend Designer and a
                  unicorn. All those just mean I both design and code beautiful
                  websites and apps that work great. I've been working in
                  website and app design and development for 11 years. From
                  wireframes to prototypes, from boilerplate to finished UI
                  components, I've got you covered.
                </p>
              </motion.div>
            </section>
            <hr className="my-6" />
            <section>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                  <p>
                    <strong>Location:</strong> I'm based in the sunny South
                    Coast of KwaZulu-Natal in South Africa. It's a small drive
                    from Durban and for local clients I'm happy to meet in
                    person. That said a lot of work is from international
                    clients and I work well remotely, whether as a solo
                    designer/developer or as a team member.
                  </p>
                  <p>
                    <strong>Work:</strong> I love working as a developer as it I
                    love seeing companies, organisations and people thrive with
                    well functioning, performant and beautiful websites. I've
                    worded freelance for many years on multiple sites and at my
                    own company to tailor a bespoke service to people needing a
                    digital footprint.
                  </p>
                </div>
              </motion.div>
            </section>
            <hr className="my-6" />
            <Banner />
            <br className="my-6" />
            <p className="m-auto">
              Most times you'll either hire a designer without any knowledge of
              the making their designs practical, or you'll hire a developer
              without any sense of aesthetics. Needless to say, that process can
              be a mess!
            </p>
            <p className="m-auto">
              On the otherhand, when you hire me, you get a designer that knows
              how to implement code and/or a developer that actually has a
              passion for design and keen aesthetics.
            </p>
            <br className="my-6" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              viewport={{ once: true }}
            >
              <section className="flex flex-col lg:flex-row justify-between items-center gap-6 py-6">
                <div>
                  <PaintBrushIcon className="size-6 text-center mx-auto" />
                  <h3 className={`text-center ${robotoSlab.className}`}>
                    Handcrafted Development
                  </h3>
                  <p>
                    I don't just use the default settings on a framework and
                    call it a day, I actually work with you to create a
                    handcrafted unique web or mobile experience. Meaning with
                    me, you get a one of a kind website. From high fidelity
                    wireframes all the way up to working live prototypes.
                  </p>
                </div>
                <div>
                  <CodeBracketIcon className="size-6 text-center mx-auto" />
                  <h3 className={`text-center ${robotoSlab.className}`}>
                    Poetic Code
                  </h3>
                  <p>
                    I don't just use the default settings on a framework and
                    call it a day, I actually work with you to create a
                    handcrafted unique web or mobile experience. Meaning with
                    me, you get a one of a kind website. From high fidelity
                    wireframes all the way up to live sites with CI/CD.
                  </p>
                </div>
              </section>
              <section className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div>
                  <DevicePhoneMobileIcon className="size-6 text-center mx-auto" />
                  <h3 className={`text-center ${robotoSlab.className}`}>
                    Responsive All the Way
                  </h3>
                  <p>
                    Most people these days access the internet on a mobile
                    device. Don't access to potential conversions, clients and
                    events due to a site being poorly developed for mobile or
                    running too slow. I make sure your SEO is great, your site
                    is accessible for those with disabilities and I make sure
                    all my sites are mobile first responsive.
                  </p>
                </div>
                <div>
                  <BoltIcon className="size-6 text-center mx-auto" />
                  <h3 className={`text-center ${robotoSlab.className}`}>
                    Lightning to the Nations
                  </h3>
                  <p>
                    I extensively and obsessively monitor pagespeed and insights
                    to ensure you'll get a great experience on a site I
                    developed, in addition to the added benefits of great SEO
                    when a site is well made and best practices are followed. I
                    keep on the cutting edge of the latest frontend technologies
                    while making sure nothing breaks on legacy browsers and
                    frameworks.
                  </p>
                </div>
              </section>
            </motion.div>
            <hr className="my-6" />
            <SkillBanner />
            <section>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                viewport={{ once: true }}
              >
                <br />
                <section className="py-2">
                  <p className="m-auto">
                    I have the following skills in Frontend Development (HTML,
                    CSS, JavaScript, Tailwind, Typescript), Libraries (React,
                    React Native) Frameworks (NextJS, Remix) and Design software
                    (Figma, Adobe XD, Sketch):
                  </p>
                  <div className="flex flex-col lg:grid grid-cols-3">
                    <ul className="py-6 ">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Typescript</li>
                      <li>React</li>
                    </ul>
                    <ul className="py-6">
                      <li>React Native</li>
                      <li>NextJS</li>
                      <li>Remix</li>
                      <li>WordPress</li>
                      <li>Shopify</li>
                    </ul>
                    <ul className="py-6 ">
                      <li>TailwindCSS</li>
                      <li>Expo</li>
                      <li>Figma</li>
                      <li>GraphQL</li>
                      <li>REST</li>
                    </ul>
                  </div>
                </section>
              </motion.div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
