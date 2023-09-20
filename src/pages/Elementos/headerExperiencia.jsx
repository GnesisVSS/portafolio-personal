import React, { useState } from 'react';

const HeaderExperiencia = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const headerClass = screenSize < 767 ? 'mobile' : 'pantalla';

    return (
        <section id='headerSobreMi' style={{marginTop:'-1px'}}>
            <div className={headerClass}>
                {headerClass === "pantalla" ? <div style={{ overflow: "hidden" }}>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: "#2A0253", width: "100%", height: "110px", transform: "scaleX(-1)" }}
                    >
                        <path d="M1200 120L0 16.48V0h1200v120z" />
                    </svg>
                </div> : ''}

            </div>

        </section>

    );
}

export default HeaderExperiencia;
