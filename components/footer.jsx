/*
* file: footer.jsx
* Description:
*   -> A footer for displaying copy right only
*/

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="copyright">
          <strong>©</strong>
          <span className="owneryear">2021 Kevin Xu</span>
        </div>
        <div>
          <a className="social" href="https://www.github.com" rel="nofollow noreferrer noopener" target="_blank">Github</a>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #222429;
          color: white;
          padding: 8px 20px;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
        }
        .copyright {
          font-size: 0.95rem;
        }
        .owneryear {
          margin: 0 5px;
        }
        .social, .owneryear {
          font-size: 0.75rem;
        }
        .social:hover {
          color: #00cba9;
        }
      `}</style>
    </div>
  )
}

export default footer;