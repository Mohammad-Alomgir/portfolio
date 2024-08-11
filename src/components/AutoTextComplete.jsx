import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A FRONTEND DEVELOPER',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A YOUTUBER',
        1000,
        'A REACT DEVELOPER',
        1000,
        'A EMAIL SIGNATURE EXPERT',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;