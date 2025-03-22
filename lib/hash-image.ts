// utils/imageUtils.ts
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs';
import path from 'path';

export async function getBlurDataURL(imagePath: string): Promise<string> {
  try {
    // Read the image as a buffer from the public folder
    const imageBuffer = fs.readFileSync(
      path.join(process.cwd(), 'public', imagePath)
    );

    // Generate the blurhash placeholder
    const { base64 } = await getPlaiceholder(imageBuffer);

    return base64;
  } catch (error) {
    console.error('Error generating blur data:', error);
    // Return a fallback tiny transparent image
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  }
}

interface slide {
  titles: string[];
  link: string;
  image: string;
  colors: string[];
}

export async function getSlideBlurData(slides: slide[]) {
  // Get blur data for all slides in parallel
  const slidesWithBlur = await Promise.all(
    slides.map(async (slide) => {
      const blurDataURL = await getBlurDataURL(slide.image);
      return {
        ...slide,
        blurDataURL,
      };
    })
  );

  return slidesWithBlur;
}
