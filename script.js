function calculateCustomArea(width, height, diameter) {
  let area;
  if (width && height) {
      area = width * height;
  } else if (diameter) {
      const radius = diameter / 2;
      area = Math.PI * Math.pow(radius, 2);
  } else {
      area = 0;
  }
  return area.toFixed(2);
}

function updateArea() {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const diameter = parseFloat(document.getElementById('diameter').value);
  const area = calculateCustomArea(width, height, diameter);
  document.getElementById('square-cm').value = area;
}

document.getElementById('width').addEventListener('input', updateArea);
document.getElementById('height').addEventListener('input', updateArea);
document.getElementById('diameter').addEventListener('input', updateArea);

updateArea();

function calculateArea(size) {
  let area;
  switch (size) {
      case 'A1':
          area = 594 * 841 / 10000; 
          break;
      case 'A2':
          area = 420 * 594 / 10000; 
          break;
      case 'A3':
          area = 297 * 420 / 10000; 
          break;
      case 'A4':
          area = 210 * 297 / 10000; 
          break;
      case 'A5':
          area = 148 * 210 / 10000;
          break;
      case 'A6':
          area = 105 * 148 / 10000; 
          break;
      default:
          area = 0;
          break;
  }
  document.getElementById('square-cm').value = area.toFixed(2); 
}
