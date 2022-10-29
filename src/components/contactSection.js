/** @format */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";
import styles from "../pages/index.module.scss";
import ResponsePopupModal from "./responsePopupModal";
import AlertTile from "./alertModal";

export default function ContactSection() {
  const router = useRouter();

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [service, setService] = useState({
    modalOpen: false,
    responseModalOpen: false,
  });

  const [copyText, setCopyText] = useState({
    copied: false,
  });

  const copyRef = useRef(null);

  function copyPhone() {
    copyRef.current.select();
    document.execCommand("copy");
    setCopyText({
      copied: true,
      copiedText: copyRef.current.value,
    });
  }

  function contactChangeHandler(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    setService({
      ...service,
      loading: true,
    });
    const contactForm = contact;
    try {
      const response = await api.post("/contacts", contactForm);
      setService({
        ...service,
        loading: false,
        error: false,
        message: response.data.message,
        responseModalOpen: true,
      });
      setContact({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact Submission Error: ", err);
      setService({
        ...service,
        loading: false,
        error: true,
        message: err.message,
        responseModalOpen: true,
      });
    }
  }

  return (
    <section style={{ marginBottom: "5rem" }} className={styles.contactSection}>
      {service.loading ? (
        <>
          <div className='progress'>
            <div className='bar'></div>
          </div>
          <div className='spinnerHolderFull'>
            <div className='spinner'></div>
          </div>
        </>
      ) : null}
      {copyText.copied ? (
        <>
          <AlertTile
            showTile={copyText.copied}
            toggleTile={() => {
              setCopyText({ copied: !copyText.copied });
            }}
            tileText={`Copied Text: ${copyText.copiedText}`}
          />
        </>
      ) : null}

      <div style={service.modalOpen ? { display: "flex" } : { display: "none" }} className={styles.phoneModal}>
        <div>
          <input style={{ width: "fitContent", fontSize: "1.8rem" }} readOnly value='+91 9620062353' ref={copyRef}></input>
          <button onClick={copyPhone}>
            Copy
            <svg xmlns='http://www.w3.org/2000/svg' width='28.5' height='33' viewBox='0 0 28.5 33'>
              <path id='Icon_material-content-copy' data-name='Icon material-content-copy' d='M24,1.5H6a3.009,3.009,0,0,0-3,3v21H6V4.5H24Zm4.5,6H12a3.009,3.009,0,0,0-3,3v21a3.009,3.009,0,0,0,3,3H28.5a3.009,3.009,0,0,0,3-3v-21A3.009,3.009,0,0,0,28.5,7.5Zm0,24H12v-21H28.5Z' transform='translate(-3 -1.5)' fill='#3f3d56' />
            </svg>
          </button>
        </div>
        <section
          onClick={() => {
            setService({
              ...service,
              modalOpen: !service.modalOpen,
            });
          }}></section>
      </div>
      <h2>Contact</h2>
      <section className={styles.contactCard}>
        <h3>Interested in Hiring me for your next project?</h3>
        <div>
          <a href='mailto:hello@roysonlewis.com' target='_blank' rel='noreferrer'>
            <button className={styles.whiteButton}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15.75' height='11.908' viewBox='0 0 15.75 11.908'>
                <path id='email' d='M.072,14.921v-9.8q0-.017.046-.323L5.266,9.733.133,15.261a1.6,1.6,0,0,1-.061-.34Zm.683-10.8a.593.593,0,0,1,.258-.051H14.881a.777.777,0,0,1,.273.051L9.99,9.069l-.683.612L7.955,10.923,6.6,9.682l-.683-.612ZM.771,15.925,5.95,10.362l2,1.82,2-1.82,5.179,5.563a.66.66,0,0,1-.258.051H1.014a.623.623,0,0,1-.243-.051Zm9.872-6.192L15.777,4.8a1.127,1.127,0,0,1,.046.323v9.8a1.45,1.45,0,0,1-.046.34Z' transform='translate(-0.072 -4.068)' fill='#3f3d56' />
              </svg>
              Email me
            </button>
          </a>
          <button
            onClick={() => {
              // document.execCommand("copy");

              setService({
                ...service,
                modalOpen: !service.modalOpen,
              });
            }}>
            <svg xmlns='http://www.w3.org/2000/svg' width='13.856' height='13.874' viewBox='0 0 13.856 13.874'>
              <path id='call' d='M3.3,5.669a1.021,1.021,0,0,1,.26-.554L5.635,3.036q.243-.208.364.069l1.68,3.153a.454.454,0,0,1-.087.537l-.762.762a.862.862,0,0,0-.243.537,2.644,2.644,0,0,0,.537,1.334,11.391,11.391,0,0,0,1.057,1.386l.537.554c.162.162.369.361.624.6A10.457,10.457,0,0,0,10.6,12.9a2.81,2.81,0,0,0,1.377.58.754.754,0,0,0,.554-.225l.9-.9a.381.381,0,0,1,.519-.069l3.032,1.784a.253.253,0,0,1,.139.182.221.221,0,0,1-.069.2L14.972,16.53a1.018,1.018,0,0,1-.554.259,4.191,4.191,0,0,1-1.915-.234,8.663,8.663,0,0,1-1.974-.944q-.909-.589-1.689-1.195T7.593,13.378l-.45-.434q-.173-.173-.459-.476t-1-1.195a17.4,17.4,0,0,1-1.23-1.741,10.156,10.156,0,0,1-.9-1.931A4.109,4.109,0,0,1,3.3,5.669Z' transform='translate(-3.267 -2.947)' fill='#f6f6f6' />
            </svg>
            Call me
          </button>
        </div>
      </section>
      <h3 className={styles.or}>- or -</h3>
      <h3>Fill the contact form</h3>
      <form id='form' onSubmit={submitHandler}>
        {service.message && !service.loading && service.responseModalOpen ? (
          <ResponsePopupModal
            togglePopup={() => {
              setService({ ...service, responseModalOpen: !service.responseModalOpen });
            }}
            message={service.message}
            error={service.error}
          />
        ) : null}

        <label>
          Full Name*
          <input onChange={contactChangeHandler} value={contact.fullName} required name='fullName' autoComplete='name'></input>
        </label>
        <label>
          Email*
          <input onChange={contactChangeHandler} value={contact.email} required name='email' autoComplete='email'></input>
        </label>
        <label>
          Subject*
          <input onChange={contactChangeHandler} value={contact.subject} required name='subject' autoComplete='subject'></input>
        </label>
        <label>
          Message
          <textarea onChange={contactChangeHandler} value={contact.message} name='message'></textarea>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}
