/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import CookieConsent from 'react-cookie-consent';
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <CookieConsent
        location="bottom"
        declineButtonText="Decline"
        enableDeclineButton
        buttonText="Accept"
        flipButtons
        overlay
        cookieName="gatsby-gdpr-google-analytics">
        This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors on this website.
      </CookieConsent>
      <Footer />
    </React.Fragment>
  );
}
