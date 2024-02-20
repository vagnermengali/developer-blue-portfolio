import Image from "next/image";

import { ImageInterface } from "@/interfaces/ImageInterface";

const DevImg = ({ containerStyles, containerStylesImage, imgSrc }: ImageInterface) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      <Image className={`${containerStylesImage} overflow-hidden`} src={imgSrc} width={500} height={500} priority alt="Profile Image"></Image>
    </div>
  );
};

export default DevImg;
