import React from "react";
import { TiUser } from "react-icons/ti";

const ChirpCard = (props) => {

    return(

     <div class="card my-2 ">

        <div class=" shadow-lg" className="card">

            <div className="card-header bg-info"> <TiUser/> @{props.username}</div>

            <div class ="blockquote m-2" className="card-body">
                <p>
                {props.chirp}
                </p> 

            <footer class="blockquote-footer my-1">Created: {props.createdAt} </footer>
            <footer class="blockquote-footer my-1">ID: {props.id} </footer>
            </div>

        </div>

     </div>   

    );




}
export default ChirpCard;