import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "../../images";
import "./Menu.css";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Menu = () => {
  const [menu, setMenu] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [prevmenu, SetprevMenu] = useState({});

  useEffect(() => {
    fetchdata();
    // axios
    //   .get("http://localhost:8080/menu")
    //   .then(function (response) {
    //     // handle success
    //     // console.log(response);
    //     setMenu(response?.data?.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  }, []);

  // useEffect(() => {
  //   if (isInitialRender) {
  //     setMenu((oldValue) => ({
  //       ...oldValue,
  //     }));
  //     setIsInitialRender(false);
  //   }
  // }, [menu, isInitialRender]);

  const fetchdata = async () => {
    const result = await axios.get("http://localhost:8080/menu");
    setMenu(result?.data?.data);
    // SetprevMenu((prev) => SetprevMenu(...prev));
  };

  // console.log(menu[0]?.images);
  // const img = URL.createObjectURL(menu[0]?.images?.data);
  // const base64String = btoa(
  //   new Uint8Array(menu[0]?.images).reduce(function (data, byte) {
  //     return data + String.fromCharCode(byte);
  //   }, "")
  // );

  function blobToB64(blob) {
    return btoa(
      new Uint8Array(blob).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
  }

  const blob = menu[0]?.images?.data;
  // console.log(blob);
  // const url = URL.createObjectURL(blob);
  // const li = blob?.toString("base64");
  const base64String = btoa(
    new Uint8Array(blob).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  // console.log(menu);
  // const url = blobToB64(blob);
  // setImageUrl(base64String);
  // console.log(li);

  return (
    <div>
      <div>
        <h1
          style={{
            fontFamily: "restaurant",
            fontSize: "35px",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Order! Your First Food
        </h1>
        {Image.map(({ url, Name }) => (
          <div className="imageCarousel">
            <div
              className="card "
              style={{
                width: "120px",
                height: "120px",
                border: "none",
                display: "inline-block",
                // justifyContent: "space-between",
              }}
            >
              <img className="card-img-top" src={url} alt="Card image cap" />
              <div className="card-body">
                <p className="spantag">{Name}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <img src={`data:image/png;base64,${blobToB64(blob)}`} /> */}
      </div>
      {menu.length > 0 &&
        menu.map((data) => (
          <>
            <FoodCard data={data} />
          </>
        ))}

      {/* <button className="static">Browse Menu</button> */}
    </div>
  );
};

export default Menu;
