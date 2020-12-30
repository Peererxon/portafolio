import React from 'react'
import { useTranslation } from 'react-i18next';
import './styles/SkillsContainer.scss';
import SkillItem from '../components/SkillItem';

const SkillsContainer = ( )  => {
    const {t} = useTranslation();
    const skills = t("resume:skills").split(',');
    console.log(skills)
    return (
        <section className = "container skills">
            <div className = "Heading">

                    <div className = "encabezado encabezado--full">
                        <h2 className = "encabezado__title" > Skills </h2>
                    </div>
            </div>
            <div className="skills-wrap">
                <div className="row">
                    {
                    skills.map( (skill,index)=> <SkillItem name={skill} key = { index } /> )
                    }
                    {
                    skills.map( (skill,index)=> <SkillItem name={skill} key = { index } /> )
                    }
                    {
                    skills.map( (skill,index)=> <SkillItem name={skill} key = { index } /> )
                    }
                </div>

            </div>
        </section>
    )
}

export default SkillsContainer;