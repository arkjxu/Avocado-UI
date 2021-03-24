/*
* file: loading.jsx
* Description:
*   -> Simple loading screen, which just displays loading... in center
*/

const Loading = () => {
  return (
    <>
      <div className="loading">Loading...</div>
      <style jsx>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Loading;