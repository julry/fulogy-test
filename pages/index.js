import Head from 'next/head';
import React, { useState } from 'react';
import Header from "../components/Header/Header";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import AdditionInfo from '../components/AdditionInfo/AdditionInfo';
import SaveModal from "../components/SaveModal/SaveModal";
import styled from '../styles/Account.module.scss';


const CURRENT_USER = {
    name: {
        secondName: 'Иванова',
        firstName: 'Анна',
        middleName: 'Михайловна'
    },
    email: 'Ivanova@mail.ru',
    phone: ''
}

async function save(data){
    const response = await fetch( 'http://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-token-access': 'random',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
}

export default function AccountPage() {
  const [editMode, setEditMode] = useState(false);
  const [confirmMode, setConfirmMode] = useState(false);
  const [userName, setUserName] = useState(CURRENT_USER.name);
  const [userEmail, setUserEmail] = useState(CURRENT_USER.email);
  const [userPhone, setUserPhone] = useState(CURRENT_USER.phone);


    return (
    <div className={styled.container}>
      <Head>
        <title>Test task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <img src={'./background.png'} />
          <Header name={Object.values(CURRENT_USER.name).join(' ')} />
          <h1>ЛИЧНЫЙ ПРОФИЛЬ</h1>
          <h2>Главная/Личный профиль</h2>
          <InfoBlock
              name={Object.values(CURRENT_USER.name).join(' ')}
              editMode={editMode}
              setEditMode={()=> setEditMode(!editMode) }
          />

          <AdditionInfo
              edit={editMode}
              email={CURRENT_USER.email}
              setConfirm={setConfirmMode}
              setName={setUserName}
              setPhone={setUserPhone}
              setEmail={setUserEmail}
              userEmail={userEmail}
              userPhone={userPhone}
              userName={userName}
          />
          {confirmMode&&<SaveModal
              save={save}
              setConfirm={setConfirmMode}
              name={userName}
              phone={userPhone}
              email={userEmail}
          />}
      </main>
    </div>
  )
}
