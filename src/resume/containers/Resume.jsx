import React from 'react';
import { Heading } from '../components/Heading';
import './styles/Resume.scss';
import { Sections } from './Sections';
import { SectionItem } from '../components/SectionItem';

const Resume = () => {
    return (
        
        <div className = "Resume">
            <Heading />
            <Sections >
                <SectionItem title="skills" />
                <SectionItem title="experience"/>
            </Sections>  
        </div>
        
    )
}

export default Resume;