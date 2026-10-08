"use client";

export default function ScrollLink({ to, className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
