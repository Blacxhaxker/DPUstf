import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DPU stf open data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/192860862_114739997559773_3868604863336412847_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeFHK3KOe7SONz5ysCo270Fxbi9vvrzA2ppuL2--vMDamhAs4wySYzWNjSgVpvKmqYzSLQw8wUTc-fFX3L3hGKFZ&_nc_ohc=sCVIlbuYUxcAX_HHtTa&_nc_ht=scontent.fbkk5-6.fna&oh=b76ba8efae3193f878cab474f44696b7&oe=610D2AA3"
          width="1280"
        ></img>
        <iframe
          className="datastudio"
          width="1280" //1440
          height="1080" //1080
          src="https://datastudio.google.com/embed/reporting/fdfe6c09-3e88-475a-b172-a545520bfd67/page/R9nWC"
          frameborder="0"
          // style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:1440px;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px;border:none;"
          allowfullscreen
        ></iframe>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <a className="link" href="https://www.facebook.com/dpustudent.dada">
            {" "}
             เด็ก DPU จะไม่ทน
          </a>
        </a>
      </footer>

      <style jsx>{`
        .container {
          width: 100%;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .link {
          color: #0070f3;
          text-decoration: none;
        }
        .link:hover,
        .link:focus,
        .link:active {
          text-decoration: underline;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
