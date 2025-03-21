import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className="bg-secondary">
            <div className="players">
                Player
                <span className="player-name">Jamin</span>
            
                <div className="event"><span className="player-event">Linus</span> scored 377</div>
                <div className="event"><span className="player-event">Ada</span> started a new game</div>
                <div className="event"><span className="player-event">Ada</span> stated a new game</div>
                <div className="event"><span className="player-event">Tim</span> wom against John</div>
                <div className="event"><span className="system-event">Game</span> connected</div>
            </div>    

            <div className="game"> 
                <div>
                    <div className="connect-four">
                        <a>Connect Four<sup>&reg;</sup></a>
                    </div>

                    <div className="user-score">
                        <div className="score">--</div>
                        <button className="btn btn-primary custom-btn">Reset</button>
                    </div>
                </div>    

                <div className="grid-container">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>

                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>

                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>

                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>

                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>

                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>

                <div className="button-container">
                    <td><button className="button"></button></td>
                    <td><button className="button"></button></td>
                    <td><button className="button"></button></td>
                    <td><button className="button"></button></td>
                    <td><button className="button"></button></td>
                    <td><button className="button"></button></td>
                    <td><button className="button"></button></td>
                </div>
            </div>  
        </main>
  );
}