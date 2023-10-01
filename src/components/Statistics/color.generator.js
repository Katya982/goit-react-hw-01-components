export const colorGenerator = () => {
  let x = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let z = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return `rgb(${x}, ${y}, ${z})`;
};