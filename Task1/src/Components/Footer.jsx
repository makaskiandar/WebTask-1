import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1d1b19] text-[#c9bfb4] px-10 pt-16 pb-8">

      <div className="grid grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl tracking-[8px] text-white font-serif">
            MAHI
          </h1>
          <p className="text-[9px] tracking-[3px] mb-6">
            MAISON DE BEAUTÉ
          </p>

          <p className="leading-7">
            A modern women's beauty and skincare house
            dedicated to calm, botanical formulations
            and timeless daily rituals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white tracking-widest mb-5 text-sm">NAVIGATION</h3>
          <div className="flex flex-col gap-4">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>

        {/* Collection */}
        <div>
          <h3 className="text-white tracking-widest mb-5 text-sm">COLLECTION</h3>
          <div className="flex flex-col gap-4">
            <p>Skincare</p>
            <p>Makeup</p>
            <p>Haircare</p>
            <p>Bodycare & Tools</p>
          </div>
        </div>

        {/* Studio */}
        <div>
          <h3 className="text-white tracking-widest mb-5 text-sm">STUDIO</h3>
          <p className="leading-7">
            MAHI Botanical Atelier<br />
            Mon-Sat, 10:00 AM - 6:00 PM<br />
            studio@mahi-beauty.example
          </p>
        </div>

      </div>

      <div className="border-t border-[#45413d] mt-12 pt-7 flex justify-between text-xs">
        <p>© 2026 MAHI Beauty. Editorial Catalog Showcase.</p>
        <p>Crafted with care for beauty.</p>
      </div>

    </footer>
  );
}

export default Footer;