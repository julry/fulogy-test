import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import AdditionInfo from "../components/AdditionInfo/AdditionInfo";
import SaveModal from "../components/SaveModal/SaveModal";
import styled from "../styles/Account.module.scss";

const CURRENT_USER = {
  name: "Иванова Анна Михайловна",
  email: "Ivanova@mail.ru",
  phone: "",
};

export default function AccountPage() {
  const [editMode, setEditMode] = useState(false);
  const [confirmMode, setConfirmMode] = useState(false);
  const [userName, setUserName] = useState(CURRENT_USER.name);
  const [userEmail, setUserEmail] = useState(CURRENT_USER.email);
  const [userPhone, setUserPhone] = useState(CURRENT_USER.phone);

  useEffect(() => {
    setUserPhone(getItem("phone", CURRENT_USER.phone));
    setUserName(getItem("name", CURRENT_USER.name));
    setUserEmail(getItem("email", CURRENT_USER.email));
  }, []);

  async function save(data) {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token-access": "random",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  const getItem = (key, defaultValue = " ") => {
    const value = localStorage.getItem(key);
    if (!value) {
      return defaultValue;
    }
    return value;
  };

  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  return (
    <div className={styled.container}>
      <Head>
        <title>Test task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={"./background.png"} />
        <Header name={CURRENT_USER.name} />
        <h1>ЛИЧНЫЙ ПРОФИЛЬ</h1>
        <h2>Главная/Личный профиль</h2>
        <InfoBlock
          name={CURRENT_USER.name}
          editMode={editMode}
          setEditMode={toggleEditMode}
        />

        <AdditionInfo
          edit={editMode}
          setConfirm={setConfirmMode}
          setName={setUserName}
          setPhone={setUserPhone}
          setEmail={setUserEmail}
          userEmail={userEmail}
          userPhone={userPhone}
          userName={userName}
        />
        {confirmMode && (
          <SaveModal
            save={save}
            setConfirm={setConfirmMode}
            name={userName}
            phone={userPhone}
            email={userEmail}
            setName={setUserName}
            setPhone={setUserPhone}
            setEmail={setUserEmail}
          />
        )}
      </main>
    </div>
  );
}
