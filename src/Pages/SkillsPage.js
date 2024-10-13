import React from "react";

const SkillPage = () => {
    return (
        <div>
            <div className='container pt-3'>
                <h1>Skills</h1>
                <div class='row'>
                    <div class='col'>
                        <br></br>
                        <p>I have worked with a variety of technologies, from frontend to backend systems and databases.</p>
                        <p>Here are the technologies I have used throughout my career:</p>
                    </div>
                </div>
            </div>
            <div className='container pt-7' style={{ textAlign: 'center'}}>
                <br></br>
                <div class='row' >
                    <div class='col'>
                        <h5 className='fw-bold'>Frontend</h5>
                        <br></br>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Bootstrap</p>
                        <p>React</p>
                        <p>Vue</p>
                        <p>TypeScript</p>
                    </div>
                    <div class='col'>
                    <h5 className='fw-bold'>Backend</h5>
                        <br></br>
                        <p>Node.js</p>
                        <p>PHP</p>
                        <p>C#</p>
                        <p>Python</p>
                        <p>Kotlin</p>
                        <p>.Net</p>
                    </div>
                    <div class='col'>
                    <h5 className='fw-bold'>Api & Databases</h5>
                        <br></br>
                        <p>MySQL</p>
                        <p>MsSQL</p>
                        <p>SQL</p>
                        <p>REST</p>
                        <p>GraphQL</p>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default SkillPage;