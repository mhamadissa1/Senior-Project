import { Link } from "react-router-dom";
import { useState } from "react";
import ExpandDown from "../assets/icons/expandDown.jsx";

function DropdownLink({ children, href, DropdownContent }) {
  const [open, setOpen] = useState(false);

  const showDropdown = open && DropdownContent;
  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        <Link
          className="hover:text-primary text-base"
          to={href}
        >
          {children}
          
          {/* Styling the Underline */}
          <span
            style={{ transform: showDropdown ? "scaleX(1)" : "scaleX(0)" }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-primary transition-transform duration-300 ease-out"
          />
          
        </Link>
        {showDropdown && <DropdownContent />}
      </div>
    </>
  );
}

export default DropdownLink;

