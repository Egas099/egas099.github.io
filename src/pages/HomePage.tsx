import React from 'react'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>{'\<Welcome!\/\>'}</h1>
      <div className="about-mi">
        <p>Hi there!👏 My name is Egor Dmitriev.</p>
        <p>I am a front-end developer specializing in technologies such as React, Redux and TypeScript.</p>
        <p>This site is under construction and will serve as a portfolio in the future.</p>
        <address>
          <a href="https://github.com/Egas099">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="30xp" height="30xp" alt="GitHub"></img>
          </a>
          <a href="https://vk.com/egas099">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670029.png" width="30xp" height="30xp" alt="vk.com"></img>
          </a>
          <a href="https://www.instagram.com/egas099/">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" width="30xp" height="30xp" alt="Instagram"></img>
          </a>
        </address>

      </div>
    </div>
  )
}

export default HomePage
