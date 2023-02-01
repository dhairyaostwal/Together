import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from '@supabase/auth-helpers-react';
import '../App.scss';

import React from 'react';

const SupabaseGoogleOauth = (nameData, dobData) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  // data which we get from csv upload
  // console.log(nameData, dobData);

  async function createGoogleCalendarEvent() {
    // for (let i = 0; i < nameData.length; i++) {
    // const date = dobData[i].split('/');
    const date = '02/03/2000'.split('/');
    const month = date[0];
    const day = date[1];
    const currentYear = new Date().getFullYear();

    const updatedDate = currentYear + '-' + month + '-' + day + 'T';
    console.log(updatedDate);

    let event = {
      // summary: nameData[i] + ' Birthday!',
      summary: 'Dhairya Birthday!',
      end: {
        dateTime: updatedDate + '23:59:59',
        timeZone: 'Asia/Kolkata',
      },
      start: {
        dateTime: updatedDate + '00:00:00',
        timeZone: 'Asia/Kolkata',
      },
      reminders: {
        useDefault: false,
        overrides: [{ method: 'popup', minutes: 10 }],
      },
      colorId: '2',
    };

    await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + session.provider_token, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert('Event created, check your Google Calendar!');
      });
    // }
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
      },
    });

    if (error) {
      console.log('Error signing in Google with Supabase');
      console.error(error);
    }
  }

  // console.log('Session: ', session);

  return session ? (
    <div className='App-Create-Event-Button'>
      <h2>Hey, {session.user.user_metadata.name}</h2>
      <button className="App-btn" onClick={() => createGoogleCalendarEvent()}>
        Create Google Calendar Events
      </button>
    </div>
  ) : (
    <div>
      <input
        type={'submit'}
        value="Sign in with Google"
        className="App-btn"
        onClick={() => googleSignIn()}
      />
    </div>
  );
};

export default SupabaseGoogleOauth;
