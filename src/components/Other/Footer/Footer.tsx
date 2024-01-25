import Socials from "@/components/Other/Socials/Socials";

const Footer = () => {

  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-white/70 text-[20px] hover:text-primary transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Marcus Vinicius. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
