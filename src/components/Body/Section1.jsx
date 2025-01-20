import React from 'react'
import './Section1.css'

function Section1() {
  return (
    <section className="university-selection-section">
        <h2>How We Select Universities</h2>
        <p className='HeadText'>We evaluate institutes based on parameters like:</p>
        <ul className="selection-list">
          <li>
            <div>1</div> 
            <div>Admission requirements</div>
          </li>
          <li>
            <div>2</div> 
            <div>Course offerings</div>
          </li>
          <li>
            <div>3</div> 
            <div>Global rankings</div>
          </li>
          <li>
            <div>4</div> 
            <div>Tuition fees</div>
          </li>
          <li>
            <div>5</div> 
            <div>Scholarship/funding options</div>
          </li>
          <li>
            <div>6</div> 
            <div>Acceptance rates</div>
          </li>
          <li>
            <div>7</div> 
            <div>Location and climate</div>
          </li>
          <li>
            <div>8</div> 
            <div>Safety</div>
          </li>
        </ul>
        <p>Our database is updated with the latest programs across top global universities. Whether you are interested in science, technology, engineering, arts, or any other field, we will find the best fit for you.</p>
      </section>
  )
}

export default Section1