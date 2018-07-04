/**
*
* Contribute
*
*/

import React from 'react';

import Button from '../Button';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

function Contribute() {
  return (
    <section className="contribute">
      <h2>Want to join us?</h2>
      <p>
        <strong>Meetings</strong><br />
        Sundays 10:30<br />
        Winnall Primary School<br />
        Garbett Road<br />
        Winchester<br />
        SO23 0NY<br />
        <FontAwesome name="phone-square" /> 
        <a href="tel:(01962) 658301">(01962) 658301</a><br />
      </p>
      <Button className="button" href="https://www.cafonline.org/charityprofile/Harvest-Winchester/CCRegNo1142544">Donate</Button>
    </section>
  );
}

export default Contribute;
