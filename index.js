const element = (
  // Write your code here.
  <div className="container">
    <h1 className="head">Congratulations</h1>
    <div className="card-cont">
      <div class="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="img"
        />
        <p className="name">Kiran V</p>
        <p className="clgname">
          Vishnu Institute of computer Education and Technology,
          <br />
          Bhimavaram
        </p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
