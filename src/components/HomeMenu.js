import React from 'react'
import "./css/homeMenu.css";
import menuImg from "../imgs-optimized/menu-img.png";
import arrow from "../imgs-optimized/arrow.png";

const HomeMenu = () => {
    return (
        <section className="homeMenu-container">
            <div className="card">
                <img src={menuImg} alt="" className="left-img"/>
                <div className="card-content">
                    <span className="under-line"><h2>Nasze menu</h2></span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit cum fuga praesentium, voluptatum labore ea recusandae aliquid repellendus omnis sed officiis consequatur optio dolorem? Enim, repellendus dolores, 
                        quisquam dolorum nemo veritatis omnis ullam adipisci dolorem atque sed, perferendis praesentium optio maiores natus. Doloremque repudiandae ex ducimus animi dolorem, labore nemo fuga pariatur, voluptatem eligendi 
                        ad vitae voluptatibus perferendis illum.
                    </p>
                    <div className="btn">
                        <a href="/Menu" className="text-btn">
                            Zobacz menu
                            <img src={arrow} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeMenu
