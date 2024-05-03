
import { useState } from "react";

function DropdownAvatar({ Avatar, DropdownContent }) {
  const [open, setOpen] = useState(false);

  const showDropdown = open && DropdownContent;
  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
          {Avatar}
          
        {showDropdown && <DropdownContent />}
      </div>
    </>
  );
}

export default DropdownAvatar;