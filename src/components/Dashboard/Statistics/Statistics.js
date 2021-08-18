import React, {useState} from "react";

const Statistics = ({
  regions,
  statistics,
  directions,
  scenarios,
  pay,
  hold,
  offers,
  streams,
  instruments,
}) => {
  const [open, setopen] = useState(false)
  
  const handleModalOpen = (params) => {
    setopen(true)
  }
  


        return (

          <div class="w3-container">
          <div class="page-header">
            <h2 class="page-header__title">Добавление Суппорта</h2>
            <button id="myBtn" class="app-button" onClick={handleModalOpen}>Добавлять</button>
          </div>
  
          <table>
            <tr>
              <th>Имя</th>
              <th>Т.аккаунт</th>
              <th>Дата</th>
              <th></th>
            </tr>
            <tr>
              <td>Александир</td>
              <td>@awesome_boy</td>
              <td>14:36 21.06.2021</td>
              <td style={{display:"flex", justifyContent: "space-around"}}>
                <span class="icon_wrap"
                  ><i class="bx bxs-edit" style={{color: "#449ad8"}}></i></span>
                <span class="icon_wrap"
                  ><i class="bx bxs-trash-alt" style={{color: "red"}}></i></span>
              </td>
            </tr>
            <tr>
              <td>Александир</td>
              <td>@awesome_boy</td>
              <td>14:36 21.06.2021</td>
              <td style={{display:"flex", justifyContent: "space-around"}}>
                <span class="icon_wrap"
                  ><i class="bx bxs-edit" style={{color: "#449ad8"}}></i></span>
                <span class="icon_wrap"
                  ><i class="bx bxs-trash-alt" style={{color: "red"}}></i></span>
              </td>
            </tr>
            <tr>
              <td>Александир</td>
              <td>@awesome_boy</td>
              <td>14:36 21.06.2021</td>
              <td style={{display:"flex", justifyContent: "space-around"}}>
                <span class="icon_wrap"
                  ><i class="bx bxs-edit" style={{color: "#449ad8"}}></i></span>
                <span class="icon_wrap"
                  ><i class="bx bxs-trash-alt" style={{color: "red"}}></i></span>
              </td>
            </tr>
            <tr>
              <td>Александир</td>
              <td>@awesome_boy</td>
              <td>14:36 21.06.2021</td>
              <td style={{display:"flex", justifyContent: "space-around"}}>
                <span class="icon_wrap"
                  ><i class="bx bxs-edit" style={{color: "#449ad8"}}></i></span>
                <span class="icon_wrap"
                  ><i class="bx bxs-trash-alt" style={{color: "red"}}></i></span>
              </td>
            </tr>
          </table>
  
          <div id="myModal" class="modal" style={open ? {display: "block"}  : {}}>
            <div class="modal-content">
              <div class="modal-header">
                <span class="close" onClick={() => setopen(false)}>&times;</span>
                <h3>Добавление Суппорта</h3>
              </div>
              <div class="modal-body">
                <form action="/action_page.php" class="support-form">
                  <label for="fname">First name:</label><br />
                  <input type="text" id="fname" name="fname" value="John" /><br />
                  <label for="lname">Last name:</label><br />
                  <input type="text" id="lname" name="lname" value="Doe" /><br />
                  <label for="email">Email:</label><br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="johdoe@gmail.com"
                  /><br />
                  <label for="tgaccount">Телеграм аккаунт:</label><br />
                  <input
                    type="tgaccount"
                    id="tgaccount"
                    name="tgaccount"
                    value="@awesome_boy"
                  /><br />
                  <label for="select">Телеграм аккаунт:</label><br />
                  <select>
                    <option value="0">Select car:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="12">Volvo</option>
                  </select>
                  <br />
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Statistics;
