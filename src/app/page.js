import ThemeButton from "@/components/ThemeButton";




export default function HomePage() {
  return (
    //this is the home/landing page for our app. it should have a (short) introduction/welcome to the school (maybe the school motto or something) & context on the houses in the school written as though a student is reading it
    //storybook-style static graphics, some animation effects on the text / scrolling
    //log in / sign up component
    // conditionally, a footer with navigation will be displayed (if you are already logged in)

    //image component
    //text component
    //login component

    //each Intro div is 100dvh and animated on scroll - text and maybe an image of the house pet?
    // parallax  ??

    <>
      <div className="schoolLogo">
        <h1>IMAGE HERE</h1>
      </div>
      <div className="schoolIntro"> Welcome to Magic Meadows!</div>
      <div className="natureIntro"> You are part of house Nature! Learn!</div>
      <div className="necromancyIntro">
        You are part of house Necromancy! Learn! or die. and then live again!
        Live and learn haha. or die.
      </div>
      <div className="logIn">Log in here</div>
      <ThemeButton />
    </>
  );
}
