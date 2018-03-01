/**
 * 
 * @param {*} url 
 * @param {*} key 
 */
function loadImg (url) {
  return new Promise((resolve, reject) => {
    if (url) {
      let img = new Image();
      img.onload = () => {
        resolve({
          hasLoad: true,
          hasError: !!(img.width === 1 && img.height === 1),
          width: img.width,
          height: img.height,
          url,
        });
      }
      img.onerror = () => {
        reject({
          hasLoad: true,
          hasError: true,
          width: img.width,
          height: img.height,
          url,
        });
      }
      img.src = url;
    } else {
      reject({
        hasLoad: false,
        hasError: false,
        url,
      });
    }
  });
}

module.exports = loadImg;