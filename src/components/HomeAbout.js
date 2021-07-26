import React from 'react'
import "./css/homeAbout.css"
import burger from "../imgs-optimized/burger.png"
import arrow from "../imgs-optimized/arrow.png";
const HomeAbout = () => {
    return (
        <section className="homeAbout-container">
            <div className="homeAbout-content">
                <span className="under-line"><h2>O nas</h2></span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magni veritatis temporibus, omnis exercitationem necessitatibus reprehenderit dignissimos officiis eum saepe et suscipit vitae, repellat hic, laudantium placeat laboriosam praesentium asperiores excepturi at sunt. Corrupti nulla unde nobis tenetur id commodi nemo molestiae atque consequuntur quibusdam pariatur quo provident qui eius eos excepturi perferendis amet deleniti sequi minus, veritatis explicabo repellat autem? Amet facere quod totam asperiores aut laborum similique illo accusantium, nisi, facilis exercitationem esse eum doloribus ullam dolorem qui sed. Exercitationem velit architecto ducimus eveniet tenetur quisquam nihil, aliquam hic provident natus iure error aliquid laboriosam delectus cupiditate esse.
                </p>
            </div>
            <img src={burger} alt="" className="right-img"/>
        </section>
    )
}

export default HomeAbout
