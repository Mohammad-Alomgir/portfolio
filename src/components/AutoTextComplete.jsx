import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Wordpress Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front End Developer',
        1000,
        'Social Media Designer',
        1000,
        'A EMAIL SIGNATURE EXPERT',
        1000,
        'Elementor expert',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;