const Nav = ({setHambleBur}) => {
  return (
    <ul className="menu-lists" onClick={() => !setHambleBur}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">services</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Nav;
