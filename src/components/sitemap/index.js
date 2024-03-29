import './style.scss';
import { $ } from '@utils/useQuerySelector';

class Sitemap {
  constructor($container) {
    this.$container = $container;

    const toggleSitemap = () => {
      $('#sitemap').classList.toggle('closed');
    };

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();

      $('#closeBtn').addEventListener('click', toggleSitemap);
      $('#openSitemap').addEventListener('click', toggleSitemap);
      $('.sitemapCategory')
        .querySelectorAll('a')
        .forEach((link) => {
          link.addEventListener('click', () => {
            $('#sitemap').classList.add('closed');
          });
        });
    };

    this.contentHTML = () => {
      return `
        <div class="material-icons">
          <span id="closeBtn" class="likedCircleBtn">close</span>
        </div>
        <section class="sitemapCategory">
          <div class="category">
            <h1>ARTIST</h1>
            <div>
              <a href="/artist/vivian">
                <h3>Vivian</h3>
              </a>
              <a href="/artist/jooa">
                <h3>Jooa</h3>
              </a>
            </div>
          </div>
          <div class="category">
            <h1>PRODUCTION</h1>
            <div>
              <a href="/production/albums">
                <h3>Albums</h3>
              </a>
              <a href="/production/music-videos">
                <h3>Music Videos</h3>
              </a>
              <a href="/production/photos">
                <h3>Photos</h3>
              </a>
            </div>
          </div>
          <div class="category">
            <h1>PRODUCER</h1>
            <a href="/producer">
                <h3>Producer</h3>
              </a>
          </div>
          <div class="category">
            <h1>Audition</h1>
            <a href="/audition">
                <h3>Audition</h3>
              </a>
          </div>
        </section>
        <section class="sitemapSNS">
          <a href="https://www.youtube.com/@V-topia-official">
            <div class="likedCircleBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476h.489ZM9.999 8.5v7l6-3.5l-6-3.5Z"/></svg>
            </div>
          </a>
          <a href="https://www.instagram.com/v_topia_official">
            <div class="likedCircleBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"/></svg>
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092537193747">
            <div class="likedCircleBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </div>
          </a>
        </section>
      `;
    };

    this.render();
  }
}

export default Sitemap;
