import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './main.module.scss'
import ButtonMain from '../../../../../../components/button/main'
import LinkMain from "../../../../../../components/link/main";
import uris from "../../../../../../config/uri";

const SectionPaginationMain: React.FC<{
    prevProject: string
    nextProject: string
}> = ({
    prevProject,
    nextProject
}) => {
    return (
        <section className={styles['project-pagination']}>
            <LinkMain style={!prevProject ? { opacity: "0.5", pointerEvents: "none", cursor: "not-allowed" } : {}} to={`${uris.projects}/${prevProject}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Previous Project
            </LinkMain>
            <LinkMain style={!nextProject ? { opacity: "0.5", pointerEvents: "none", cursor: "not-allowed" } : {}} to={`${uris.projects}/${nextProject}`}>
                Next Project
                <FontAwesomeIcon icon={faArrowRight} />
            </LinkMain>
        </section>
    )
}

export default SectionPaginationMain
