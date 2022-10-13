import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";

import { useUserStore } from "../store/store";

import styles from "../styles/Home.module.css";

enum PAYMENT {
  Success,
  Fail,
  Loading,
}

const PosCheckoutComponent = () => {
  const router = useRouter();
  const setUser = useUserStore((state: any) => state.setUser);

  const [paymentStatus, setPaymentStatus] = useState(PAYMENT.Loading);

  const getClientId = async (sessionId: string | string[] | undefined) => {
    // faz uma request para o backend django
    // backend django faz a seguinte request para stripe:
    // REQUEST EXEMPLO: curl https://api.stripe.com/v1/checkout/sessions/cs_test_a15HZMxTo1aSsDhwKvKku7Kzi2pjRFYJ4D5goKB7Y3Kv0SwyJfWQMnJj1d -u sk_test_51HqiHpFm7x7XSTxAXGegtstsdrB3MJKlfwrfxGdZN8AfLJTdSm5QyHqbOQr3IO40uPenLpNG70LrCeNsynXNh0b500Chtup5xE:
    // captura as informaçoes recebidas, salva na DB e ativa o usuário
    // retorna ao front o client_reference_id e um payment_status
    const response = await fetch(
      process.env.BACKEND_URL + "/core/confirm_checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
        }),
      }
    );

    return response.json();
  };

  useEffect(() => {
    // criar um useEffect que captura o sessionId
    const { sessionId } = router.query;

    if (sessionId) {
      getClientId(sessionId)
        .then((res) => {
          if (res.payment_status === "paid") {
            setPaymentStatus(PAYMENT.Success);
          } else {
            setPaymentStatus(PAYMENT.Fail);
          }
        })
        .catch((err) => setPaymentStatus(PAYMENT.Fail));
    }
  }, [router, setUser]);

  const handleCaminhosButton = () => {
    router.push("/");
  };

  const SuccessComponent = () => (
    <main className={styles.main}>
      <h1 className={styles.title}>Compra Finalizada</h1>

      <p className={styles.description}>
        Parabéns! Agora é hora de aprender a programar!
      </p>

      <Button variant="contained" onClick={handleCaminhosButton}>
        Caminhos
      </Button>
    </main>
  );

  const FailComponent = () => (
    <main className={styles.main}>
      <h1 className={styles.title}>Ocorreu algum erro no pagamento :/</h1>
      <h1 className={styles.title}>Estamos trabalhando para resolver isso.</h1>
      <p className={styles.description}>
        Caso necessário, entrem contato em: contato@ailo.ai
      </p>
    </main>
  );

  const LoadingComponent = () => (
    <main className={styles.main}>
      <h1 className={styles.title}>...</h1>
    </main>
  );

  const StatusComponent = ({ status }: { status: number }) => {
    const states: any = {
      [PAYMENT.Success]: <SuccessComponent />,
      [PAYMENT.Fail]: <FailComponent />,
      [PAYMENT.Loading]: <LoadingComponent />,
    };
    return states[status];
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout" />
        <link rel="icon" href="/favicon.ico" />
        <noscript>
          <Image
            alt="facebook"
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=579978647132421&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <Script
        id="facebook"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '579978647132421');
          fbq('track', 'PageView');
          fbq('track', 'Purchase', {currency: "BRL", value: 9.90});
          `,
        }}
      />
      <StatusComponent status={paymentStatus} />
    </div>
  );
};

export default PosCheckoutComponent;
