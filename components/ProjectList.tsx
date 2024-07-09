// ProjectList.tsx
import React from 'react';
import Head from 'next/head';
import styles from '@styles/global.module.css';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>{'Project List'}</title>
        <meta name="description" content="Description of the projects." />
      </Head>
      <div className={styles.ex}>
        <h2 className={styles.subtit}>Some Examples of Website Projects</h2>
        <div className={styles.examples}>
          <div className={styles.img}>
            <div className={styles.w1}>
              <Image src="/img/w1.png" alt="W1" width="250" height="220" />
            </div>
            <div className="w2">
              <Image src="/img/w2.png" alt="W2" width="290" height="220" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subtitle2}>
        <h2>My Background Projects</h2>
      </div>
      <div className={styles.subpar2}>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <p className={styles.li_title}>{project.title}</p>
              <p>{project.description}</p>
            </li>
          ))}
          <li>
            These and many other works are presented in my GitHub, by clicking
            on the link you can get acquainted with them, I try to update it
            regularly.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
