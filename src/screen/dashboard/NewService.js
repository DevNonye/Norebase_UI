import React, { useState } from "react";
import { useNavigate } from "react-router";
import DashboardNav from "../../components/widgets/navbar/DashboardNav";
import "./DashboardStyles.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Cards from "../../components/cards/Cards";
import CustomButtons from "../../components/buttons/CustomButtons";
import ServicesButton from "../../components/buttons/ServicesButton";
import Modal from "../../components/modals/Modal";

const NewService = () => {
  const history = useNavigate();

  const [state, setState] = useState({
    showModal: false,
    price: "",
    tradMarkHeader: "Do you want to register a new trademark?",
    companyHeader: "Do you want to incorporate a new company?",
    patentHeader: "Do you want to register a new patent?",
    title: "",
  });

  const toggleModal = () => {
    if (state.showModal) {
      setState((prevState) => ({ ...prevState, showModal: false }));
    } else {
      setState((prevState) => ({ ...prevState, showModal: true }));
    }
  };

  const renderTrademark = () => {
    toggleModal();
    setState((prevState) => ({ ...prevState, title: state.tradMarkHeader }));
  };
  const renderCompanyIncorporation = () => {
    toggleModal();
    setState((prevState) => ({ ...prevState, title: state.companyHeader }));
  };
  const renderPatent = () => {
    toggleModal();
    setState((prevState) => ({ ...prevState, title: state.patentHeader }));
  };

  return (
    <>
      <DashboardNav />
      <main className="main">
        <section className="new-service-container">
          <div className="back-link">
            <MdKeyboardArrowLeft size={22} />
            <p onClick={() => history(-1)}>Back</p>
          </div>
          <div className="cards-grid-header">
            <p>Select a service below to get started</p>
          </div>
          <div className="cards-grid">
            <Cards
              background="rgb(255, 255, 255)"
              borderRadius="5px"
              boxShadow=" rgb(232 232 232 / 30%) 0px 0px 20px 4px"
              padding="30px 20px"
              height="315px"
            >
              <p className="card-header">Trademark Registration</p>
              <div className="flex">
                <ServicesButton
                  background="#FF8500"
                  color="#fff"
                  title="Select"
                  padding="15px 40px"
                  onClick={renderTrademark}
                />
              </div>

              <ul className="card-list">
                <li>Secure your brand assets.</li>
                <li>Trademark in multiple countries.</li>
                <li>Email support.</li>
              </ul>
            </Cards>

            <Cards
              background="#FF8500"
              borderRadius="5px"
              boxShadow=" rgb(232 232 232 / 30%) 0px 0px 20px 4px"
              padding="30px 20px"
              height="340px"
            >
              <p className="card-header" style={{ color: "#fff" }}>
                Company Incorporation
              </p>
              <div className="flex">
                <ServicesButton
                  background="#FFF"
                  color="#FF8500"
                  title="Select"
                  padding="15px 40px"
                  onClick={renderCompanyIncorporation}
                />
              </div>

              <ul className="card-list">
                <li style={{ color: "#fff" }}>
                  Prepare & File company registration.
                </li>
                <li style={{ color: "#fff" }}>Expand across Africa.</li>
                <li style={{ color: "#fff" }}>Email support.</li>
              </ul>
            </Cards>

            <Cards
              background="rgb(255, 255, 255)"
              borderRadius="5px"
              boxShadow=" rgb(232 232 232 / 30%) 0px 0px 20px 4px"
              padding="30px 20px"
              height="315px"
            >
              <p className="card-header">Patent Registration</p>
              <div className="flex">
                <ServicesButton
                  background="#FF8500"
                  color="#fff"
                  title="Select"
                  padding="15px 40px"
                  onClick={renderPatent}
                />
              </div>

              <ul className="card-list">
                <li>File patents in multiple countries.</li>
                {/* <li>Trademark in multiple countries.</li> */}
                <li>Email support.</li>
              </ul>
            </Cards>
          </div>
        </section>
        {state.showModal ? (
          <Modal toggleModal={toggleModal}>
            <Cards
              background="#fff"
              borderRadius="5px"
              padding="30px 20px"
              margin="auto auto"
            >
              <h5>{state.title}</h5>
              <div>
                <p>Select your country</p>
                <div>
                    
                </div>
              </div>
            </Cards>
          </Modal>
        ) : null}
      </main>
    </>
  );
};

export default NewService;
