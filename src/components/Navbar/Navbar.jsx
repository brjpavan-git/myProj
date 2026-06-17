const menus = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Pavan Portfolio</h2>

      <ul>
        {menus.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}