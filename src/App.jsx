import React, { useState, useEffect } from 'react';
import ChirpCard from "./ChirpCard";
import { v4 as uuidv4} from "uuid";
import moment from 'moment';
import { HiChatAlt2 } from "react-icons/hi";



const App = () => {

    const [username, setUsername] = useState('');
    const [chirp, setChirp] = useState([]);
    const maxLength = 150;
    let createdAt = moment().calendar();


 {/* Events *********************/}

    const handleButtonClick = e => {
        e.preventDefault();
       
        // create new chirp
        const newChirp = {

            id: uuidv4(),
            username,
            chirp,
            createdAt // moment property
           
        }
        // prepend card
        
        console.log("new chirp object!: ");
        console.log(newChirp);  //this is the new chirp object that needs to be added to the array

        console.log(cards); //This is the array of predefined cards

        console.log(newChirp);  //this is the most recent chirp
        
        setCards([newChirp,...cards])  //this updates the cards array and updates state |  updates the new array "cards" by adding newChirp object to the existing array "cards"

    }

{/* End Events *********************/}


     //  Predefined cards Array
     const [cards, setCards] = useState([

        {username: "Simon", chirp: "haha omg computers are cool", id: "00000", createdAt: "random time in the past"},
        {username: "Luke", chirp: "lol omg Y2K!", id: "11111", createdAt: "12/31/1999"},
        {username: "Andrew", chirp: "lmao", id: "22222", createdAt: Date.now() +" seconds ago"}

    ]);

  
    
    return (
        <main className="container">

            <h1 class="my-2">👋 Hello! Welcome to Chirper!🐦  </h1>
          
            
                <form class = "my-2"className="form">

                        <div>
                        <label class ="my-2" className="text-lg"><HiChatAlt2/> Tell everyone what you think... </label>
                        </div>

                        <>
                        {/* input Username */}
                        <input class="my-2" value= {username} onChange={(e) => setUsername(e.target.value)} className="form-control" type="text-box" placeholder ="@username"  /> 
                        </>
                        <>

                        {/* input chirp  */}
                        <input value= {chirp} onChange={(e) => setChirp(e.target.value)} className="form-control" type="text-area" placeholder ="What's on your mind?🤔" maxLength={maxLength}/>
                        <label className="text-sm" class="bg-light m-2 text-secondary">Characters = {chirp.length}/150</label>
                        </>

                </form>

        <button onClick={handleButtonClick} type="button" class="btn btn-primary my-2">Click to Chirp</button>


                {/* Output Section - Cards */}

        {/* Q: Could you please clarify the workflow of this function in the lab review? */}
        {cards.map((card, index) => (

            <ChirpCard key ={`chirp-card-${index}`} username ={card.username} chirp={card.chirp} id={card.id} createdAt= {card.createdAt}/>
        ))}

                        
        </main>

    );



};

export default App;