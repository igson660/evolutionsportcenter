import React from 'react';
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'

export default function SocialMedia({thisMidea, urlFaceBook, urlInstagran}) {
  return(
    <>
      <a href={ urlInstagran }>
        <img 
        alt="Instagran"
        src={ instagram }
        width="30px"
        />
      </a>
      { thisMidea ? (  
        <a href={ urlFaceBook }>
          <img
          alt="Facebook"
          src={ facebook }
          width="30px"
          />
        </a>     
        ) : null
      }
    </>
  );
}
