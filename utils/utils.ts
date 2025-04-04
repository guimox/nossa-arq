export const classNamePrefix = "plaiceholder";

export const extractImgSrc = (plaiceholderClass: string) =>
  plaiceholderClass
    .replace([classNamePrefix, "-["].join(""), "")
    .replace("]", "");
