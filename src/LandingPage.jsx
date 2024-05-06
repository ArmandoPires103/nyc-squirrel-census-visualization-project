import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
 return (
        <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="./src/index.css" />
        <title>TutorLink Website</title>
      </head>
      <body>
        <nav>
        </nav>
        <section className="section">
          <div className="section__container">
            <div className="content">
              <p className="subtitle"></p>
              <h1 className="title">
                <span>Welcome to Nutty Neighbors<br />where the acorns aren't the only things going nuts!</span>
              </h1>
              <p className="description">
              Join us on this nutty adventure as we uncover the truth behind your neighborhood's most wanted squirrels. Together, we'll bring justice to the trees, one furry felon at a time!
              </p>
              <div className="action__btns">
              <Link to="/beware">
                <button className="hire__me">Find Them</button>
              </Link>
              </div>
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1714758119/squirrel-mugshot_rify1j.jpg" alt="profile" />
            </div>
          </div>
        </section>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  );
};



export default LandingPage