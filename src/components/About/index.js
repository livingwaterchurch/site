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
        <h3><FontAwesome name="info-circle" /> About</h3>
        <p>Living Water Church is a church for the community right in the heart of Winnall. Chris and Annali lead the church. Chris is a familiar face in Winnall where he leads Winnall Junior Youth Club on a Wednesday evening during school terms. Chris and Annali are also volunteers at Breakfast Club at Winnall Primary School.</p>
      </section>

      <section>
        <h3><FontAwesome name="group" /> Meetings</h3>
        <p>What to expect in our meetings? Our meetings tend to be small. You are welcome to sit quietly and listen, or to engage at whatever level you feel comfortable with. We have a time of worship followed by a short sermon. We end with coffee and biscuits.</p>
      </section>

      <section>
        <h3><FontAwesome name="heart" /> Prayer</h3>
        <p>Do you have prayer needs, or do you just want to talk to someone? We would love to hear your story, and pray with you if you want to.</p>
      </section>

      <section>
        <h3><FontAwesome name="thumbs-up" /> Helping Hands</h3>
        <p>Are you struggling to cope with life, or just need a helping hand? We would love to help where we can. Come along on a Sunday, or give us a ring.</p>
      </section>
    </div>
  );
}

export default About;
