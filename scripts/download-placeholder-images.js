const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      file.close();
      fs.unlink(filepath, () => {
        reject(err);
      });
    });
  });
};

const images = {
  career: {
    'hero-bg.jpg': 'https://source.unsplash.com/1600x900/?office,modern',
    'employee-1.jpg': 'https://source.unsplash.com/800x800/?professional,woman',
    'employee-2.jpg': 'https://source.unsplash.com/800x800/?professional,man',
    'employee-3.jpg': 'https://source.unsplash.com/800x800/?business,person',
  },
  industries: {
    'healthcare.jpg': 'https://source.unsplash.com/1200x800/?healthcare,hospital',
    'retail.jpg': 'https://source.unsplash.com/1200x800/?retail,store',
    'finance.jpg': 'https://source.unsplash.com/1200x800/?finance,banking',
    'technology.jpg': 'https://source.unsplash.com/1200x800/?technology,office',
    'education.jpg': 'https://source.unsplash.com/1200x800/?education,university',
    'manufacturing.jpg': 'https://source.unsplash.com/1200x800/?manufacturing,factory',
  }
};

async function downloadAllImages() {
  console.log('Starting image downloads...');

  for (const [category, categoryImages] of Object.entries(images)) {
    for (const [filename, url] of Object.entries(categoryImages)) {
      const filepath = path.join('public', 'images', category, filename);
      console.log(`Downloading ${filename}...`);
      try {
        await downloadImage(url, filepath);
        console.log(`✓ Downloaded ${filename}`);
      } catch (error) {
        console.error(`✗ Error downloading ${filename}:`, error);
      }
    }
  }

  console.log('All downloads completed!');
}

downloadAllImages(); 