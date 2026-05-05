import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container';

const navLinks = [
  { name: 'How it works', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'FAQ', href: '#' },
];

const Navbar = () => {
  return (
<header className="sticky top-0 z-50 flex justify-center w-full px-4"> 

  <nav
    className="max-w-[1300px] w-full flex items-center transition-all duration-300 px-3 md:px-5 mt-3 rounded-[20px]" 
    style={{
      height: '65px',
      backgroundColor: '#0A1B22',
      border: '1px solid #3B4F53', 
      boxShadow: '0px 4px 30px 0px #00000033'
    }}
  >
    <div className="flex items-center justify-between w-full">
      
      {/* 1. Logo Section */}
      <Link href="/" className="flex items-center group">
        <Image
          src="/logo-image.png"
          width={108}
          height={50}
          className="w-[108px] h-auto object-contain"
          alt="TeloAI Logo"
          priority
        />
      </Link>

      {/* 2. Navigation Links Section */}
      <div className=" cursor-pointer hidden text-sm md:flex font-secondary items-center gap-8 lg:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-base md:text-sm text-white transition whitespace-nowrap font-[500]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* 3. Call to Action Button */}
      <button className="bg-[#10B981] font-secondary cursor-pointer text-white text-sm md:text-sm font-[500] px-5 md:px-7 py-2.5 rounded-[15px] bg-[#34D399] transition whitespace-nowrap">
        Book a Demo
      </button>

    </div>
  </nav>
</header>
  );
};

export default Navbar;