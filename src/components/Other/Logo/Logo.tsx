import Link from "next/link";

const Logo = () => {

  return (
    <Link href="/">
      <p className="sm:text-3xl text-2xl font-bold text-primary tracking-[4px] relative before:text-white before:rotate-180 before:top-[24.5px] before:right-[34.4px] sm:before:top-[30px] sm:before:right-[40px] before:absolute before:content-['.'] before:w-2 before:h-2">Marcus Ferreira</p>
    </Link>
  );
};

export default Logo;
