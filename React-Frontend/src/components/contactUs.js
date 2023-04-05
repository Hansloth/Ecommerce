import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import banner_img from '../data/contact_us_banner.png'
import sales_support_logo from '../resources/sales_support_logo.png'
import tech_support_logo from '../resources/tech_support_logo.png'
import gps_icon from '../resources/gps_icon.png'


export default function contactUs() {
  return (
    <>

      <article className="contact_us_container">
        <Card>
        <div className="contact_us_card_img_container">
              <Card.Img
                src={sales_support_logo}
                alt="sales logo"
              />
            </div>
          <Card.Body>
            <Card.Text  className="contact_us_card_title_text">Sales Support</Card.Text>
            <div className = "contact_info_text">
              <Card.Text>PHONE: 1-800-HELP-NOW</Card.Text>
              <Card.Text>EMAIL: howto@hotmail.com</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </article>

      <article className="contact_us_container">
        <Card>
        <div className="contact_us_card_img_container">
              <Card.Img
                variant="top"
                src={tech_support_logo}
                alt="tech logo"
              />
            </div>
          <Card.Body>
            <Card.Text className="contact_us_card_title_text">Tech Support</Card.Text>
              <div className = "contact_info_text">
                <Card.Text>PHONE: 1-800-HELP-NOW</Card.Text>
                <Card.Text>EMAIL: howto@hotmail.com</Card.Text>
              </div>
          </Card.Body>
        </Card>
      </article>

      <article className="contact_us_container">
        <Card>
        <div className="contact_us_card_img_container">
              <Card.Img
                variant="top"
                src={gps_icon}
                alt="tech logo"
              />
            </div>
          <Card.Body>
            <Card.Text className="contact_us_card_title_text">Location</Card.Text>
              <div className = "contact_info_text">
                <Card.Text>Dreese Lab</Card.Text>
                <Card.Text>2015 Neil Ave, Columbus, OH 43210</Card.Text>
              </div>
          </Card.Body>
        </Card>
      </article>

    </>
  );
}
