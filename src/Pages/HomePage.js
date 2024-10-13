import React from "react";
import { mainStyle, profilePicture } from './bgPicStyle';  // Importér stilen

const HomePage = () => {
    return (
        <div>
            <main style={mainStyle}>
                <div class="row container pt-5">
                    <div class="col">
                        <h7>Hi,</h7> 
                        <br></br>
                        <h7>I am, Rasmus</h7>
                        <br></br>
                        <h7>Software Developer</h7>
                    </div>
                    <div class="col" style={profilePicture}></div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;

