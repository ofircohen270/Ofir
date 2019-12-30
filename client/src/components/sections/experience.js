import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import Section from "./section";

class JobCard extends React.Component {
    bull = <span style={{
        display: 'inline-block',
        margin: '0 10px',
        transform: 'scale(0.8)',
    }}>•</span>;

    render = () => (
        <Card className={"experience-card"}>
            <CardContent>
                <div style={{textAlign: "left"}}>
                    <h2>{this.props.job.title}</h2>
                    <Typography variant="button" style={{fontSize: 15}} color="textSecondary" gutterBottom>
                        {this.props.job.location}
                        {this.bull}
                        {this.props.job.datesString}
                    </Typography>
                    <ul>
                        {this.props.job.bulletPoints.map((bulletPoint, key) => (
                            <li key={key} style={{margin: "15px 0px"}}>
                                {bulletPoint}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}

class Experience extends React.Component {

    render() {
        console.log(this.props.jobs)
        return (
            <Section backgroundColor={"#eee"}>
                <h1>My Experience</h1>
                {this.props.jobs.length ? this.props.jobs.map((job, key) => (
                    <JobCard key={key} job={job}/>
                )) : ""}
            </Section>
        )
    }
}

export default Experience;
