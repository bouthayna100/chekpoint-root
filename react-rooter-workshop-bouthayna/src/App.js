import React, { useState } from 'react'
import MovieList from './component/MovieList'
import Description from './component/Description'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [ moviess, setMoviess ] = useState( [
        {
            id: uuidv4(),
            title: "The Wizard of Oz",
            url2: "https://www.youtube.com/embed/k3B1GCpxzyk",
            description: "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.",
            rate: 4,
            url: "https://images.squarespace-cdn.com/content/5890fda486e6c0dcab5025fe/1567044815197-51R0PTS4T53703D0KK0Q/p5095_v_v8_ag.jpg?content-type=image%2Fjpeg"
        },
        {
            id: uuidv4(),
            title: "Shrek",
            url2: "https://www.youtube.com/embed/urJ4kShWsf4",
            description: "Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad (John Lithgow).",
            rate: 5,
            url: "https://i.pinimg.com/564x/a5/ae/48/a5ae48861b19751372fdb0af6344e1b9.jpg"
        },
        {
            id: uuidv4(),
            title: "Harry Potter",
            url2: "https://www.youtube.com/embed/UFn5KHye6_g",
            description: "Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle. At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil wizard named Lord Voldemort.",
            rate: 5,
            url: "http://3.bp.blogspot.com/-b4tggdxOD9U/Uk7SdMckW2I/AAAAAAAAACY/t8WqMOdJUgM/s1600/harry2+cover.jpg"
        },
        {
            id: uuidv4(),
            title: "The Lord of the Rings",
            url2: "https://www.youtube.com/embed/4LhkXX9r6kY",
            description: "The Lord of the Rings, a shy young hobbit named Frodo Baggins inherits a simple gold ring. He knows the ring has power, but not that he alone holds the secret to the survival--or enslavement--of the entire world. Now Frodo, accompanied by a wizard, an elf, a dwarf, two men and three loyal hobbit friends",
            rate: 2,
            url: "https://cdn.shopify.com/s/files/1/0747/3829/products/HP2393_586819de-9c1a-486a-88bc-ec8432c15aa1_1024x1024.jpg?v=1571444850"
        },
        {
            id: uuidv4(),
            title: "Almost Famous",
            url2: "https://www.youtube.com/embed/4U07rtBNa2g",
            description: "The film is semi-autobiographical, as Crowe himself was a teenage writer for Rolling Stone. It is based on his experiences touring with rock bands Poco, the Allman Brothers Band, Led Zeppelin, Eagles, and Lynyrd Skynyrd. Crowe has discussed how during this period he lost his virginity, fell in love.",
            rate: 3,
            url: "https://bojackson54.com/wp-content/uploads/2017/06/almost-famous-glasses.jpg"
        }

    ] )
    return <>
        <Router>

            <Route path="/" exact render={( props ) => <MovieList mo={( movies ) => setMoviess( movies )} list={moviess}  {...props} />} />
            < Route path="/description/:id" render={( props ) => <Description {...props} list={moviess} />} />

        </Router>
    </>
}
export default App