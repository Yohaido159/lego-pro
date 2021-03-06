import React, { useState, useEffect, useReducer } from "react";

import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux/cart/cart.actions";
import { HashLink as Link } from "react-router-hash-link";

import "./MainPage.styles.scss";

import Item1 from "../../after/4.png";
import Item2 from "../../after/3.png";
import Item3 from "../../after/5.png";

import Big from "../../after/1.png";
import Small from "../../after/2.png";

import ModalBuy from "../ModalBuy/ModalBuy";
import InfoModal from "../infoModal/infoModal";

const cartObj = {
  itemPrice: null,
  itemName: null,
};

const MainPage = (props) => {
  const reducer = (state, new_state) => ({ ...state, ...new_state });
  const [cart, setCart] = useReducer(reducer, {
    ...cartObj,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCart({ [name]: value });
  };

  useEffect(() => {
    console.log(cart);
    dispatch(setCartItems(cart));
  }, [cart]);
  return (
    <div dir="rtl" className="main">
      <section className="hero">
        <div className="hero__img"></div>
        <div className="hero__content">
          <h1 className="hero__title">הצעצוע המושלם לילדך</h1>
          <h3 className="hero__subtitle">משחק מגנטים יחודי המאפשר לילדך חווית בניה כיפית ויצירתית באופן מיוחד</h3>
          <Link to="/#buy" className="btn btn-outline-secondary btn-block mt-auto text-main">
            קנה עכשיו
          </Link>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row mt-120">
            <div className="col d-flex justify-content-center mb-85">
              <h2>
                ברוכים הבאים לצעצועים של <br />
                <span className="lirstoys">Lirstoys</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mbr-40">
              <div className="item d-flex flex-column align-items-center ">
                <div className="mb-40 item__img">
                  <img className="item__img--3" src={Item3} alt="" />
                </div>
                <div className="item__text--3 ">
                  <p className="p-red">
                    הצעצועים הטובים ביותר של <span className="lirstoys"> Lirstoys </span> מעוררים את דמיונכם של ילדכם,
                    מעודדים מיומנויות חשיבה ומטפחים יצירתיות.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mbr-40">
              <div className="item d-flex flex-column align-items-center ">
                <div className="mb-40 item__img item--2">
                  <img className="item__img--2" src={Item2} alt="" />
                </div>
                <div className="item__text--1 ">
                  <p className="p-red p-invert">
                    באמצעות המגנטים האיכותיים של <span className="lirstoys lirstoys-invert"> Lirstoys </span> ילדכם יוכל
                    לפרוח ולהנות ע”י בניה מהמגנטים מגדלים, מטוסים וחיות, הכל באופן בטוח ביותר בלי חלקים קטנים שעלולים
                    להיות מסוכנים.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="item d-flex flex-column align-items-center ">
                <div className="mb-40 item__img">
                  <img className="item__img--1" src={Item1} alt="" />
                </div>
                <div className="item__text--1 ">
                  <p className="p-red">
                    המגנטים האיכותיים של <span className="lirstoys">Lirstoys</span> מגיעים בשני גדלים, יש חבילה של 30
                    חלקים ויש חבילה של 72 חלקים, ביחרו את החבילה הטובה ביותר עבורכם.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-images ">
        <h2 className="pb-85 pt-85 mb-0">מבחר דוגמאות לאפשרויות יצירה</h2>
        <div className="container ">
          <div className="row">
            <div className="image-gallery mbr-85">
              <div className="img-c">
                <div className="img-1 img"></div>
              </div>
              <div className="img-c">
                <div className="img-2 img"></div>
              </div>
              <div className="img-c img-c-3">
                <div className="img-3 img"></div>
              </div>
              <div className="img-c">
                <div className="img-4 img"></div>
              </div>
              <div className="img-c">
                <div className="img-5 img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-buy">
        <div className="container">
          <div className="row d-flex flex-column align-items-center">
            <h2 className="pt-85 pb-20">אחרי שראיתם את המשחק- אז למה אתם מחכים??</h2>
            <h3 className="pb-20">קנו עכשיו את החבילה שלכם במחיר מיוחד לזמן מוגבל!</h3>
          </div>
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-md-6 mbr-40 " id="buy">
                <div className="card d-flex flex-column mt-auto align-items-center">
                  <h5 className="pt-28 pb-15 mb-0">72 חלקים</h5>
                  <h6 className="h6-white">רק ב 90 ש"ח</h6>
                  <div className="img_container">
                    <img src={Big} alt="big" />
                  </div>
                  <button
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-block mt-auto text-main"
                    onClick={() => setCart({ itemName: "לגו 72 חלקים", itemPrice: 90 })}
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    קנה עכשיו
                  </button>
                </div>
              </div>
              <div className="col-md-6 mbr-40">
                <div className="card d-flex flex-column mt-auto align-items-center">
                  <h5 className="pt-28 pb-15 mb-0">30 חלקים</h5>
                  <h6 className="h6-white">רק ב 60 ש"ח</h6>
                  <div className="img_container">
                    <img src={Small} alt="Small" />
                  </div>

                  <button
                    data-toggle="modal"
                    data-target="#loginModal"
                    className="btn btn-outline-primary btn-block mt-auto text-main"
                    onClick={() => setCart({ itemName: "לגו 30 חלקים", itemPrice: 60 })}
                  >
                    קנה עכשיו
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="more d-flex justify-content-center">
        <div className="row">
          <div className="container">
            <div className="d-flex flex-column align-items-center mt-40">
              <button
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-auto text-main mb-0 black"
                data-toggle="modal"
                data-target="#infoModal"
              >
                עוד מידע
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="return" className="mt-40 mb-40">
        <div className="return d-flex flex-column align-items-center ">
          <div className="return__text">
            <h4 className="">מדיניות החזרות</h4>
            <p className="font-main">
              במידה וקבלתם מוצר פגום - נחליפו בחדש. רכשתם מוצר ולא מתאים לכם, ניתן להחזיר מוצר כשהוא סגור באריזתו
              המקורית ובתנאי שלא נעשה בו שימוש תוך 14 יום, בניכוי דמי משלוח. אחריות הלקוח לשלוח את המוצר בחזרה לכתובתנו
              ועל חשבונו, כשהוא במצבו שהתקבל כולל תקינות האריזה
            </p>
          </div>
        </div>
      </section>

      <footer className="d-flex justify-content-center align-items-center">
        <div className="cont d-flex flex-column justify-content-center">
          <div className="row d-flex justify-content-center footer">
            <div className="footer__icon d-flex mr-5 mbr-40">
              <i className="fa fa-phone fa-2x ml-2"></i>
              <p>054-919-2400</p>
            </div>
            <div className="footer__icon d-flex mr-5 mbr-40">
              <i className="fa fa-envelope fa-2x ml-2"></i>
              <p>lirstoysil@gmail.com</p>
            </div>
            <div className="footer__icon d-flex mr-5">
              <i className="fa fa-whatsapp fa-2x ml-2"></i>
              <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3e3lTt2">
                053-201-9109
              </a>
            </div>
          </div>

          <div className="row d-flex justify-content-center  mt-40 footer">
            <div className="footer__icon icon--1 d-flex  mr-5 mbr-40">
              <i className="fa fa-facebook fa-2x ml-2"></i>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Pro-LIRS-TOYS-526400541048527/"
              >
                Facebook
              </a>
            </div>
            <div className="footer__icon icon--2 d-flex  mr-5 mbr-40">
              <i className="fa fa-instagram fa-2x ml-2"></i>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lirstoys/">
                Instagram
              </a>
            </div>
            <div className="footer__icon icon--3 d-flex  mr-5">
              <i className="fa fa-twitter fa-2x ml-2"></i>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lirstoys">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ModalBuy />
      <InfoModal />
    </div>
  );
};

export default MainPage;
