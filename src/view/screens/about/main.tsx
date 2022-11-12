import styles from './main.module.scss'
import ProfilePic from './assets/profile-pic.jpg'

const AboutMain = () => (
  <>
    <main className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.dpContainer}>
        <img alt="display" src={ProfilePic.src} />
      </div>
      <h3>Hi, I`m Royson Lewis ❤</h3>
      <p>
        I am a UX / UI designer and developer with hands-on experience in building web apps and
        websites from scratch from initial designs to development and all the way to hosting a
        complete production-ready software in a custom-configured server.
      </p>
      <a
        rel="noreferrer"
        href="https://storage.googleapis.com/rl_portfolio_backend/Resume-Royson-Lewis.pdf"
        target="_blank"
      >
        <button type="button">Download Resume</button>
      </a>
      <div>
        <h3>Say Hello!</h3>
        <section>
          <a
            aria-label="twitter"
            rel="noreferrer"
            href="https://twitter.com/lewisroysonj"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35.674"
              height="28.974"
              viewBox="0 0 35.674 28.974"
            >
              <path
                id="twitter"
                data-name="twitter"
                d="M32.007,10.6c.023.317.023.634.023.951,0,9.665-7.357,20.8-20.8,20.8A20.661,20.661,0,0,1,0,29.072a15.124,15.124,0,0,0,1.766.091,14.642,14.642,0,0,0,9.077-3.124,7.324,7.324,0,0,1-6.836-5.07,9.22,9.22,0,0,0,1.381.113,7.733,7.733,0,0,0,1.924-.249,7.312,7.312,0,0,1-5.863-7.176v-.091a7.363,7.363,0,0,0,3.3.928A7.322,7.322,0,0,1,2.49,4.716a20.782,20.782,0,0,0,15.075,7.651,8.253,8.253,0,0,1-.181-1.675,7.318,7.318,0,0,1,12.653-5,14.4,14.4,0,0,0,4.64-1.766,7.292,7.292,0,0,1-3.214,4.029,14.657,14.657,0,0,0,4.21-1.132A15.717,15.717,0,0,1,32.007,10.6Z"
                transform="translate(0 -3.381)"
                fill="#f1f1f1"
              />
            </svg>
          </a>
          <a
            rel="noreferrer"
            aria-label="linkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/lewisroysonj/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.545"
              height="32.545"
              viewBox="0 0 32.545 32.545"
            >
              <path
                d="M30.221,2.25H2.317A2.335,2.335,0,0,0,0,4.6V32.449A2.335,2.335,0,0,0,2.317,34.8h27.9a2.341,2.341,0,0,0,2.325-2.346V4.6A2.341,2.341,0,0,0,30.221,2.25ZM9.836,30.146H5.013V14.614H9.844V30.146ZM7.424,12.493a2.8,2.8,0,1,1,2.8-2.8,2.8,2.8,0,0,1-2.8,2.8ZM27.918,30.146H23.094V22.591c0-1.8-.036-4.119-2.506-4.119-2.514,0-2.9,1.961-2.9,3.988v7.686H12.866V14.614h4.628v2.121h.065a5.081,5.081,0,0,1,4.569-2.506c4.882,0,5.79,3.218,5.79,7.4Z"
                transform="translate(0 -2.25)"
                fill="#f1f1f1"
              />
            </svg>
          </a>
        </section>
        <a
          rel="noreferrer"
          style={{ color: 'white' }}
          href="mailto:hello@roysonlewis.com"
          target="_blank"
        >
          <h4 style={{ margin: '1rem 0' }}>hello@roysonlewis.com</h4>
        </a>
      </div>
    </main>
  </>
)

export default AboutMain
