import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Everything as Code',
    description: (
      <>
        Wir versuchen, alles in Textform (Code) bereitzustellen. Dadurch kann nach 
        allem schnell gesucht werden und alles ist gut nachvollziehbar.
      </>
    ),
  },
  {
    title: 'Community by Design',
    description: (
      <>
        Professionelle Softwareentwicklung bedeutet Collaboration. Ihr findet einen 
        Rechtschreibfehler? Etwas ist unverständlich oder fehlerhaft beschrieben?
        Teilt es uns auf moderne Art und Weise (per Issues, Pull Requests oder 
        Discussions) mit.
      </>
    ),
  },
  {
    title: 'Unsponsored',
    description: (
      <>
        Die verwendeten Tools und Methodiken wurden aufgrund persönlicher Präferenzen
        und bestehender Erfahrungswerte der Referent:innen ausgesucht. Dies bedeutet 
        natürlich nicht, dass es keine anderen Tools und Methodiken gibt. Letztlich 
        muss jeder für sich sein ideales Entwicklungsumfeld herausfinden.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
