import Image from "next/image";
import type { Metadata } from "next";
import styles from "./Page.module.css";
import ArrowDown from "@/icons/ArrowDown";
import Input from "@/components/Input";
import CheckBox from "@/components/CheckBox";
import Menu from "@/icons/Menu";
import Services from "./Services";
import Form from "./Form";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Build generational wealth with 909 Equity Capital through multifamily real estate opportunities and investor education.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <section className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <h1>
              <span>We Buy Houston Homes</span>
              <span className={styles.dot}></span>
              <span>No Banks</span>
              <span className={styles.dot}></span>
              <span>No Agents</span>
              <span className={styles.dot}></span>
              <span>No Waiting</span>
            </h1>
          </div>
          <div className={styles.down}>
            <ArrowDown />
            <p className={styles.short}>
              909 Equity Capital uses creative finance, including subject-to and
              seller financing, to buy homes directly from Houston homeowners. A
              better exit for sellers. A smarter path to generational wealth for
              our community.
            </p>
            <p>Scroll to explore</p>
          </div>
        </div>
      </section>
      <section className={styles.who_section}>
        <div className={styles.who_section_1}>
          <div></div>
          <Image
            src="/new-image-1.jpg"
            width={600}
            height={500}
            alt="Our Team"
            quality={100}
          />
        </div>
        <div className={styles.who_section_2}>
          <div className={styles.title}>
            <Menu />
            <h3>OUR STORY</h3>
          </div>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2>The Name Says Everything.</h2>
              <p>
                "909" isn't a corporate code. It's a date, the birthday of our
                founder's wife. A reminder of why we do this.
              </p>
              <br />
              <p>
                909 Equity Capital was built on a simple belief. Real wealth
                isn't measured in transactions. It's measured in what you leave
                behind, for your children, for their children, and for the
                communities you touched along the way.
              </p>
              <br />
              <p>
                {" "}
                Our founder came to this country with little more than a vision
                and a family to protect. No inheritance. No connections. No
                safety net. What he had was resilience, discipline, and an
                unshakeable commitment to building something real. That story is
                baked into everything we do.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.who_section_3}>
          <Image
            src="/new-image-2.jpg"
            width={400}
            height={400}
            alt="Our Team"
            quality={100}
          />
          <Image
            src="/new-image-3.jpg"
            width={600}
            height={500}
            alt="Our Team"
            quality={100}
          />
        </div>
      </section>
      <section className={styles.what_section}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <h1>
              <span>We Buy Houston Homes</span>
              <span className={styles.dot}></span>
              <span>No Banks</span>
              <span className={styles.dot}></span>
              <span>No Agents</span>
              <span className={styles.dot}></span>
              <span>No Waiting</span>
            </h1>
          </div>
          <div className={styles.who_section_2}>
            <div className={styles.title}>
              <Menu color="#00DE96" />
              <h3>OUR APPROACH</h3>
            </div>
            <div className={styles.content}>
              <h2>We acquire differently</h2>
              <p className={styles.top}>
                While most buyers rely on traditional bank financing, we
                specialize in creative finance, particularly subject-to and
                seller finance acquisitions.
              </p>
              <p className={styles.top}>
                That means we take over existing mortgages, structure deals
                directly with sellers, and close without the red tape of a
                conventional sale. No rate risk. No institutional gatekeepers.
              </p>
              <p className={styles.top}>
                Just smart, human-centered deal-making.
              </p>
            </div>
          </div>
          <div className={styles.who_section_3}>
            <div className={styles.title}>
              <span className={styles.icon}>
                <Menu color="#00DE96" />
              </span>
              <h3>PILLARS</h3>
            </div>
            <div className={styles.grid_content}>
              {[
                {
                  title: "Subject-to Acquisitions",
                  subtitle:
                    "We take over your existing mortgage, giving you a fast and clean exit without a traditional sale.",
                },
                {
                  title: "Seller Finance Acquisitions",
                  subtitle:
                    "We work with you directly to structure a deal that works for you with no banks or agents required",
                },
                {
                  title: "Starting with Single Family",
                  subtitle:
                    "We are building our portfolio one Houston home at a time, with a long-term vision for multifamily apartments.",
                },
                {
                  title: "Generational Stewardship",
                  subtitle:
                    "Every acquisition we close is structured to serve not just today’s purpose, but the next generation best interest.",
                },
              ].map((value, index) => (
                <div key={index}>
                  <h4>{value.title}</h4>
                  <p>{value.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.opportunities}>
        <div className={styles.section}>
          <h4>01 - 03 WHO WE ARE FOR</h4>
          <div className={styles.wrapper}>
            <h2>Sellers</h2>
            <p>
              You've built something. We want to honor it. If you own a property
              and need a flexible, respectful exit, we have creative solutions
              that work for your situation.
            </p>
          </div>
          <ul>
            {[
              "Relieve from financial distress",
              "⁠Avoid costly repairs",
              "Unruly tenants or vacant properties",
              "⁠Fast and hassle-free closing",
            ].map((value, index) => (
              <li key={value}>
                <p>0{index + 1}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <Link href={""}>
            <span>Sell Your House to Us</span>
            <ArrowRight />
          </Link>
        </div>
        <Image
          src="/who-for.png"
          width={500}
          height={500}
          alt="Our Team"
          quality={100}
        />
      </section>
      <section className={styles.opportunities}>
        <div className={styles.section}>
          <h4>02 - 03 | WHAT WE ARE COMMITTED TO</h4>
          <div className={styles.wrapper}>
            <h2>Education</h2>
            <p>
              New to creative finance? Start here. Learn how subject-to and
              seller financing work and why they're reshaping how smart
              investors build wealth.
            </p>
          </div>
          <ul>
            {[
              "Legal in all 50 States of the US",
              "⁠Been around for centuries",
              "⁠Fastest closes",
              "Rebuild seller’s credit",
            ].map((value, index) => (
              <li key={value}>
                <p>0{index + 1}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <Link href={""}>
            <span>Start Learning</span>
            <ArrowRight />
          </Link>
        </div>
        <Image
          src="/education-image.jpg"
          width={500}
          height={500}
          alt="Our Team"
          quality={100}
        />
      </section>
      <section className={styles.opportunities}>
        <div className={styles.section}>
          <h4>03 - 03 | WHO WE WORK WITH</h4>
          <div className={styles.wrapper}>
            <h2>Partners</h2>
            <p>
              Got a deal? Let's build together. We work with operators,
              wholesalers, and investors who share our values and want to do
              bigger things
            </p>
          </div>
          <ul>
            {[
              "Institutional-grade underwriting",
              "Passive income distributions",
              "Tax-efficient structures",
              "Portfolio diversification",
            ].map((value, index) => (
              <li key={value}>
                <p>0{index + 1}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <Link href={""}>
            <span>Let’s Partner</span>
            <ArrowRight />
          </Link>
        </div>
        <Image
          src="/partner-image.png"
          width={500}
          height={500}
          alt="Our Team"
          quality={100}
          className={styles.last}
        />
      </section>
      {/* <Services /> */}
      <section className={styles.form}>
        <Image
          src={"/form-image.png"}
          width={500}
          height={500}
          alt="Contact Form"
          quality={100}
        />
        <Form />
      </section>
    </section>
  );
}
