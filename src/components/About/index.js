/**
*
* About
*
*/

import React from 'react';

import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function About() {
  return (
    <div className="about">
      <section>
        <h3><FontAwesome name="group"/> History</h3>
        <p>What to expect in our meetings? Our meetings tend to be small. You are welcome to sit quietly and listen, or to engage at whatever level you feel comfortable with. We have a time of worship followed by a short sermon. We end with coffee and biscuits.</p>
      </section>

      <section>
        <h3><FontAwesome name="group"/> Meetings</h3>
        <p>What to expect in our meetings? Our meetings tend to be small. You are welcome to sit quietly and listen, or to engage at whatever level you feel comfortable with. We have a time of worship followed by a short sermon. We end with coffee and biscuits.</p>
      </section>

      <section>
        <h3><FontAwesome name="child"/> Youth Club</h3>
        <p>Chris is the lead youth worker at Winnall Junior Youth Club.</p>
      </section>

      <section>
        <h3><FontAwesome name="cutlery"/> Breakfast Club</h3>
        <p>Chris and Annali vlunteer on a weekly basis at Winnall Primary School Breakfast Club, run by the Salvation Army.</p>
      </section>

      <section>
        <h3><FontAwesome name="heart"/> Values</h3>
        <p>These are some of the things we value in church:</p>
<p>Friendship
Prayer
Healing
Faith
Hope
Love
Jesus Saves
Laughter
Joy
Worship
Songs
Acceptance
Word and Truth</p>
</section>

<section>
        <h3><FontAwesome name="music"/> Worship</h3>
</section>
    </div>
  );
}

export default About;
