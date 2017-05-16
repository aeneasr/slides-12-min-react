import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  demo: require("../assets/demo-time.jpg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            React.js
          </Heading>
          <Appear fid="1">
            <Text margin="1em 0 0 0">
              Or: Why you will write your next user interface in React
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black">

          <BlockQuote>
            <Quote>
              React makes it painless to create interactive UIs.
            </Quote>
            <Cite>
              Facebook (they wrote and maintain it)
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide maxWidth="90%">
          <ComponentPlayground
            theme="dark"
            previewBackgroundColor=""
            code={require("raw-loader!../assets/deck.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Take aways
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <List>
            <Appear><ListItem>It makes writing HTML + CSS + Javascript easier</ListItem></Appear>
            <Appear><ListItem>Components are the future of web development</ListItem></Appear>
            <Appear><ListItem>React is extremely efficient</ListItem></Appear>
            <Appear><ListItem>It's awesome for SEO</ListItem></Appear>
            <Appear><ListItem>You get amazing, out-of-the-box developer tools</ListItem></Appear>
            <Appear><ListItem>And...</ListItem></Appear>
            <Appear><ListItem>Facebook is written with it</ListItem></Appear>
          </List>
        </Slide>

        <Slide
          transition={["slide"]}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.demo.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            This presentation is written in React!
          </Heading>
          <Appear fid="2">
            <Interactive />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" maxHeight="90vh" maxWidth="80vw">
          <iframe src="http://editor.ory.am" style={{ width: '100%', height: '80vh' }} />
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            ORY Sites App
          </Heading>
          <Appear fid="1">
            <Heading size={2} fit textColor="tertiary">
              A desktop app for building beautiful websites,<br/>
              written in React and Electron.
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="black">
          <Heading size={1} caps fit textColor="black">
            Links you will love
          </Heading>
          <List>
            <Appear><ListItem><a style={{color: 'black'}} href="http://arekkas.github.io/slides-12-min-react">arekkas.github.io/slides-12-min-react</a>: These slides right here.</ListItem></Appear>
            <Appear><ListItem><a style={{color: 'black'}} color="black" href="https://github.com/facebookincubator/create-react-app">Create React App</a>: Create React apps with no build configuration.</ListItem></Appear>
            <Appear><ListItem><a style={{color: 'black'}} href="https://github.com/facebookincubator/create-react-app">React Native</a>: Build native mobile apps using JavaScript and React.</ListItem></Appear>
            <Appear><ListItem><a style={{color: 'black'}} href="https://github.com/storybooks/storybook">Storybook</a>: UI Component Dev Environment for React.</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" textColor="white">
          <Heading size={1} caps fit textColor="white">
            Links, links, links!
          </Heading>
          <List>
            <Appear><ListItem><a style={{color: 'white'}} href="https://github.com/ory">github.com/ory</a>: 5000 stars of open source work.</ListItem></Appear>
            <Appear><ListItem><a style={{color: 'white', textDecoration: 'none'}} href="https://twitter.com/_aeneasr">twitter.com/_aeneasr</a>: Occasionally interesting stuff.</ListItem></Appear>
            <Appear><ListItem><a style={{color: 'white'}} href="https://github.com/arekkas">github.com/arekkas</a>: My GitHub handle.</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Not convinced yet?
          </Heading>
          <Appear fid="1">
            <Heading size={2} fit textColor="tertiary">
              Talk to me later and I'll make it happen!
            </Heading>
          </Appear>
        </Slide>

      </Deck>
    );
  }
}
