import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf8');

describe('HTML Test', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html;
  });

  it('should have <div id="app">', () => {
    expect(document.querySelector('#app')).toBeTruthy();
  });

  it('should have a title', () => {
    expect(window.document.title).toBe('V-Topia');
  });

  it('should have a logo image', () => {
    const logo = window.document.querySelector('.logo img');
    expect(logo).toBeTruthy();
    expect(logo.getAttribute('alt')).toBe('v-topia');
  });

  it('should have all necessary links', () => {
    const links = document.querySelectorAll('nav a');
    expect(links.length).toBe(7);
    expect(links[0].getAttribute('href')).toBe('/artist/vivian');
    expect(links[1].getAttribute('href')).toBe('/artist/jooa');
    expect(links[2].getAttribute('href')).toBe('/production/albums');
    expect(links[3].getAttribute('href')).toBe('/production/music-videos');
    expect(links[4].getAttribute('href')).toBe('/production/photos');
    expect(links[5].getAttribute('href')).toBe('/producer');
    expect(links[6].getAttribute('href')).toBe('/audition');
  });
});
