import React from 'react'
import allimg from "../Assets/allimg.png"
import "./session3.css"

const Session3 = () => {
  return (
    <div className='session3Con'>
        <div className='innerCon'>
            <div className='textCon'>
                <h2>Metabnb NFTS</h2>
                <p>Discover our NFT gift cards collection. Loyal <br/> customers gets
                amazing gift cards which are <br/> traded as NFTs. These NFTs gives our customers <br/>
                access to loads of our exclusive services.
                </p>
                <div>
                    <button>Learn more</button>
                </div>
            </div>
            <div className='imgContainer'>
                <img src={allimg} alt="img"/>
            </div>
        </div>
    </div>
  )
}

export default Session3