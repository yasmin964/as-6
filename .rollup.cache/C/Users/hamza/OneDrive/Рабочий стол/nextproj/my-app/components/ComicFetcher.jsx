import { useState } from 'react';
import Image from 'next/image';
import styles from '@styles/global.module.css';
const ComicFetcher = () => {
  const [email, setEmail] = useState('');
  const [comicTitle, setComicTitle] = useState('');
  const [comicImgSrc, setComicImgSrc] = useState('');
  const [comicImgAlt, setComicImgAlt] = useState('');
  const [comicDate, setComicDate] = useState('');
  const [showComic, setShowComic] = useState(false);
  const fetchComicID = async (email) => {
    const params = new URLSearchParams({ email });
    console.log('Fetching comic ID with email:', email);
    const response = await fetch(
      `https://fwd.innopolis.university/api/hw2?${params.toString()}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comic ID');
    }
    return response.json();
  };
  const fetchComic = async (comicID) => {
    console.log('Fetching comic with ID:', comicID);
    const response = await fetch(
      `https://fwd.innopolis.university/api/comic?id=${comicID}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comic');
    }
    return response.json();
  };
  const handleGetComic = async (e) => {
    e.preventDefault();
    try {
      const comicID = await fetchComicID(email);
      console.log('Comic ID received:', comicID);
      const comicData = await fetchComic(comicID);
      setComicTitle(comicData.safe_title);
      setComicImgSrc(comicData.img);
      setComicImgAlt(comicData.alt);
      const dateString = `${comicData.year}-${comicData.month}-${comicData.day}`;
      const date = new Date(dateString);
      setComicDate(date.toLocaleDateString());
      setShowComic(true);
    } catch (error) {
      console.error('Failed to fetch comic:', error);
      setComicTitle('Error loading comic');
      setComicImgSrc('');
      setComicImgAlt('');
      setComicDate('');
      setShowComic(true);
    }
  };
  return (
    <div className={styles.comic}>
      <div className={styles.comic__head}>
        <div className={styles.comic__name}>
          <h1>XKCD Comic Fetcher</h1>
        </div>
        <div className={styles.comic__placeholders}>
          <form id="email-form" onSubmit={handleGetComic}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </form>
          <div className={styles.comic__button}>
            <button id="get-comic-btn" onClick={handleGetComic}>
              Get a random comic
            </button>
          </div>
        </div>
      </div>
      {showComic && (
        <div id="comic-container">
          <h2 id="safe_title">{comicTitle}</h2>
          <Image id="comic-img" src={comicImgSrc} alt={comicImgAlt} />
          <p id="comic-date">{comicDate}</p>
        </div>
      )}
      <div className={styles.top__content}>
        <div className={styles.content_container}>
          <div className={styles.subtitle1}></div>
        </div>
      </div>
    </div>
  );
};
export default ComicFetcher;
//# sourceMappingURL=ComicFetcher.jsx.map
