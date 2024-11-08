import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
  const loggeIn = { firstName: "Renan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggeIn?.firstName || "Guest"}
            subText="Access and manage your account and trasactions."
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
