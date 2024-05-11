import { Link } from "react-router-dom";
import GlobeSVG from "../../assets/icons/globeSVG";

function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-y-16 px-48 py-24">
        <div className="grid grid-cols-4 auto-cols-fr bg-base-100 gap-x-10">
          <div className="flex flex-col gap-12">
            <nav className="flex flex-col gap-3">
              <h6 className="font-display text-base-content font-semibold text-base mb-2">
                Community
              </h6>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Branding
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Design
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Marketing
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Advertisement
              </Link>
            </nav>

            <div>
              <p>
                <GlobeSVG /> Langauage
              </p>
              <p>Currency</p>
              <p>Theme</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <h6 className="font-display text-base-content font-semibold text-base mb-2">
              About Us
            </h6>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Branding
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Marketing
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
          </nav>

          <nav className="flex flex-col gap-3">
            <h6 className="font-display text-base-content font-semibold text-base mb-2 gap-2">
              Products
            </h6>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Branding
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Marketing
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Advertisement
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
            <Link className="hover:text-primary font-body text-sm font-medium">
              Design
            </Link>
          </nav>

          <div className="flex flex-col gap-12">
            <nav className="flex flex-col gap-3">
              <h6 className="font-display text-base-content font-semibold text-base mb-2 gap-2">
                Learn
              </h6>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Branding
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Design
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Marketing
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Advertisement
              </Link>
            </nav>
            <nav className="flex flex-col gap-3">
              <h6 className="font-display text-base-content font-semibold text-base mb-2 gap-2">
                Support
              </h6>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Branding
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Design
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Marketing
              </Link>
              <Link className="hover:text-primary font-body text-sm font-medium">
                Advertisement
              </Link>
            </nav>
          </div>
        </div>

        <aside className="flex justify-center border-t-2 pt-4">
          <p className="font-body text-base-content font-normal text-sm">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;