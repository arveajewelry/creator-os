import "../globals.css";

export const metadata = { title: "Privacy - Creator OS" };

export default function Privacy() {
  return (
    <section className="section pulse-bg">
      <div className="container-x" style={{ maxWidth: 720 }}>
        <a href="/" className="tiny" style={{ color: "#80808a" }}>&larr; Back</a>
        <h1 className="h2" style={{ marginTop: 24 }}>Privacy Policy</h1>
        <p className="lead" style={{ marginTop: 20 }}>We collect only what we need to deliver your purchase and serve you well.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>What we collect</h3>
        <p className="lead">Email address. Purchase metadata (product, price, date). Standard server logs (IP, user agent) for 30 days.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>How we use it</h3>
        <p className="lead">To deliver your files, send product updates, and respond to support. We do not sell your data. We do not rent lists.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>Unsubscribe</h3>
        <p className="lead">Every email has an unsubscribe link. Click it, and you are removed from all mailings within 24 hours.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>Contact</h3>
        <p className="lead">Questions? privacy@arveajewelry.com</p>
      </div>
    </section>
  );
}
