import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <img src="/edu_FOOTER.png" alt="" style={{ width: '100%', height: 'auto' }}/>
        <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} EduBrix. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer