import "../globals.css";

export const metadata = { title: "Terms - Creator OS" };

export default function Terms() {
  return (
    <section className="section pulse-bg">
      <div className="container-x" style={{ maxWidth: 720 }}>
        <a href="/" className="tiny" style={{ color: "#80808a" }}>&larr; Back</a>
        <h1 className="h2" style={{ marginTop: 24 }}>Terms of Service</h1>
        <p className="lead" style={{ marginTop: 20 }}>Creator OS is a digital product sold by Arvea Jewelry, LLC. By purchasing or subscribing, you agree to the following.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>Delivery</h3>
        <p className="lead">Digital products are delivered by email within 30 seconds of completed purchase. If you do not receive your files, email support at arveajewelry.com.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>Refunds</h3>
        <p className="lead">All tiers include a 30-day money-back guarantee. Email support at arveajewelry.com within 30 days of purchase and we will refund the full amount. No questions, no forms.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>License</h3>
        <p className="lead">You receive a personal, non-transferable license to use all materials. You may not resell, redistribute, or share the files publicly.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>Results disclaimer</h3>
        <p className="lead">We make no guarantees about specific outcomes. Results depend on your effort and execution. Case studies referenced are illustrative, not typical.</p>
        <h3 className="h3" style={{ marginTop: 28 }}>Contact</h3>
        <p className="lead">Questions? support@arveajewelry.com</p>
      </div>
    </section>
  );
}
