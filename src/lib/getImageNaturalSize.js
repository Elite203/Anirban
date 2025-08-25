// Utility to get image natural dimensions
export async function getImageNaturalSize(src) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = function() {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
}
