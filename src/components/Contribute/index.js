/**
*
* Contribute
*
*/

import React from 'react';

import Button from '../Button';
import styles from './styles.css';

function Contribute() {
  return (
    <section className="contribute">
      <h2>Want to join us?</h2>
      <address>
	<strong>Meetings</strong><br />
  Sundays 10:30<br />
	Winnall Community Centre<br />
	Garbett Road<br />
	Winchester<br />
	SO23 0NY<br/>
	<abbr title="Phone">t:</abbr>
	<a href="tel:(01962) 658301">(01962) 658301</a><br/>
</address>
      <Button className="button" href="https://www.cafonline.org/charityprofile/Harvest-Winchester/CCRegNo1142544">Donate</Button>
    </section>
  );
}

export default Contribute;
