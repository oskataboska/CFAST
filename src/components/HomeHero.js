import React from 'react'
import "./css/homehero.css"
const HomeHero = () => {
    return (
        <section className="home-container">
            <div className="home-content">
                <h1>CFAST</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur ab maxime repellendus aut amet commodi cumque, 
                    libero aperiam possimus, maiores et sapiente cum qui quidem 
                    quaerat, voluptatem esse ipsum sint illum error laborum velit at vitae. 
                    Ratione dolor porro cupiditate.
                </p>
                <div className="btns">
                    <a href="/o-nas" className="about-btn">Zobacz więcej</a>
                    <a href="/menu" className="menu-btn">Nasze menu</a>
                </div>
            </div>
        </section>
    );
    
}


export default HomeHero
