import Image from "next/image";

import { ImageInterface } from "@/interfaces/ImageInterface";

const DevImg = ({ containerStyles, containerStylesImage, imgSrc, priority, alt }: ImageInterface) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      {
        priority ?
          <Image className={`${containerStylesImage} overflow-hidden`} src={imgSrc} width={500} height={500} priority alt={alt}/>
          :
          <Image className={`${containerStylesImage} overflow-hidden`} src={imgSrc} width={500} height={500} alt={alt}/>
      }

    </div>
  );
};

export default DevImg;
