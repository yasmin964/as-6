import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '@styles/global.module.css';
import fetch from 'node-fetch';
import axios from 'axios';

interface ComicData {
  safe_title: string;
  img: string;
  alt: string;
  year: string;
  month: string;
  day: string;
}

interface ComicFetcherProps {
  initialComicData?: ComicData;
}

const ComicFetcher: React.FC<ComicFetcherProps> = ({ initialComicData }) => {
  const [email, setEmail] = useState('');
  const [comicTitle, setComicTitle] = useState(
    initialComicData?.safe_title || '',
  );
  const [comicImgSrc, setComicImgSrc] = useState(initialComicData?.img || '');
  const [comicImgAlt, setComicImgAlt] = useState(initialComicData?.alt || '');
  const [comicDate, setComicDate] = useState('');
  const [showComic, setShowComic] = useState(false);

  const handleGetComic = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const comicID = await fetchComicID(email);
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
      <Head>
        <title>
          {comicTitle ? `XKCD Comic: ${comicTitle}` : 'XKCD Comic Fetcher'}
        </title>
        <meta name="description" content="Fetch and display XKCD comics." />
      </Head>
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
          <Image
            id="comic-img"
            src={comicImgSrc}
            alt={comicImgAlt}
            width={500}
            height={500}
          />
          <p id="comic-date">{comicDate}</p>
        </div>
      )}
    </div>
  );
};

async function fetchComicID(email: string): Promise<number> {
  const params = new URLSearchParams({ email });
  console.log('Fetching comic ID with email:', email);
  const response = await axios.get(`https://fwd.innopolis.university/api/hw2`, {
    params,
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch comic ID');
  }
  return response.data as number;
}

async function fetchComic(comicID: number): Promise<ComicData> {
  console.log('Fetching comic with ID:', comicID);
  const response = await axios.get(
    `https://fwd.innopolis.university/api/comic?id=${comicID}`,
  );
  if (response.status !== 200) {
    throw new Error('Failed to fetch comic');
  }
  return response.data as ComicData;
}

export async function getServerSideProps() {
  try {
    const comicID = await fetchComicID('default@example.com'); // Replace with a default email if needed
    const initialComicData = await fetchComic(comicID);
    return { props: { initialComicData } };
  } catch (error) {
    console.error('Failed to fetch initial comic:', error);
    return { props: { initialComicData: null } };
  }
}

export default ComicFetcher;
