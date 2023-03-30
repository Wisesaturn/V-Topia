import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf8');

describe('HTML Test', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html;
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
    expect(links.length).toBe(4);
    expect(links[0].getAttribute('href')).toBe('/artist');
    expect(links[1].getAttribute('href')).toBe('/production');
    expect(links[2].getAttribute('href')).toBe('/producer');
    expect(links[3].getAttribute('href')).toBe('/audition');
  });
});
