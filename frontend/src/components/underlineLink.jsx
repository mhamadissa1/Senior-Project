import { useState } from "react";

function UnderlineLink({ children, href }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </div>
    </>
  );
}

export default UnderlineLink;
