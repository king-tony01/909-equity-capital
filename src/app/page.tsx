import Image from "next/image";
import styles from "./Page.module.css";
import ArrowDown from "@/icons/ArrowDown";
import Input from "@/components/Input";
import CheckBox from "@/components/CheckBox";
import Menu from "@/icons/Menu";
import Services from "./Services";
import Form from "./Form";

export default function Home() {
  return (
    <section className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <h1>
              <span>Build</span>
              <span className={styles.dot}></span>
              <span>Generational</span>
              <span className={styles.dot}></span>
              <span>Wealth</span>
            </h1>
          </div>
          <div className={styles.down}>
            <ArrowDown />
            <p className={styles.short}>
              Transgenerational wealth rooted in family values
            </p>
            <p>Scroll to explore</p>
          </div>
        </div>
      </section>
      <section className={styles.who_section}>
        <div className={styles.who_section_1}>
          <div></div>
          <Image
            src="/first_section.jpg"
            width={600}
            height={500}
            alt="Our Team"
            quality={100}
          />
        </div>
        <div className={styles.who_section_2}>
          <div className={styles.title}>
            <Menu />
            <h3>WHO ARE WE?</h3>
          </div>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2>
                A Legacy Built on <br /> Love and Resilience
              </h2>
              <p>
                From immigrant dreams to generational impact, our story is{" "}
                <br />
                rooted in family, values, and the pursuit of something greater{" "}
                <br />
                than financial success.
              </p>
            </div>
            <div className={styles.bottom}>
              <div>
                <p>
                  909 Equity Capital was born from a deeply personal place. The
                  name "909" honors the birthday of our founder's
                  wife—symbolizing love, legacy, and the generational
                  connections that define true wealth.
                </p>
                <p>
                  We blend the precision of Wall Street with the warmth of
                  family room values, creating investment opportunities that
                  honor both financial excellence and human connection.
                </p>
              </div>
              <p>
                As an immigrant who experienced firsthand the challenges of
                building a new life from the ground up, our founder shaped a
                vision rooted in resilience, family values, and the pursuit of
                legacy. What began with humble beginnings has evolved into a
                mission to help families build a future they can be proud of.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.who_section_3}>
          <Image
            src="/who_1.jpg"
            width={400}
            height={400}
            alt="Our Team"
            quality={100}
          />
          <Image
            src="/who_3.jpg"
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
              <span>Build</span>
              <span className={styles.dot}></span>
              <span>Generational</span>
              <span className={styles.dot}></span>
              <span>Wealth</span>
            </h1>
          </div>
          <div className={styles.who_section_2}>
            <div className={styles.title}>
              <Menu color="#153635" />
              <h3>WHAT WE STAND FOR</h3>
            </div>
            <div className={styles.content}>
              <p className={styles.top}>
                Our philosophy is simple: <br /> capital should be structured,
                protected, <br /> and positioned to serve future generations.
              </p>
              <ul>
                {[
                  "Family Centered",
                  "Integrity",
                  "Resilience",
                  "Growth",
                  "Community Impact",
                  "Strategic Vision",
                ].map((value, index) => (
                  <li key={value}>
                    <p>{value}</p> <p>0{index + 1}</p>
                  </li>
                ))}
              </ul>
              <p className={styles.bottom}>
                909 Equity Capital is a real estate investment firm focused on
                multifamily acquisitions and long-term wealth preservation. We
                operate with institutional discipline while remaining grounded
                in values that prioritize family, stewardship, and generational
                continuity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.opportunities}>
        <div className={styles.section}>
          <h4>01 - 02</h4>
          <div className={styles.wrapper}>
            <h2>Investment Opportunities</h2>
            <p>
              Access carefully selected multifamily acquisitions structured for
              stability, income generation, and long-term appreciation.
            </p>
          </div>
          <ul>
            {[
              "Institutional-grade underwriting",
              "Passive income distributions",
              "Tax-efficient structures",
              "Portfolio diversification",
              "Ongoing performance reporting",
            ].map((value, index) => (
              <li key={value}>
                <p>0{index + 1}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/det_1.jpg"
          width={500}
          height={500}
          alt="Our Team"
          quality={100}
        />
      </section>
      <section className={styles.opportunities}>
        <div className={styles.section}>
          <h4>02 - 03</h4>
          <div className={styles.wrapper}>
            <h2>Investor Education</h2>
            <p>
              Equip yourself with the tools, insights, and mentorship to make
              informed investment decisions. Learn how to grow your portfolio
              and become a steward of generational wealth.
            </p>
          </div>
          <ul>
            {[
              "Real estate investment frameworks",
              "Risk assessment methodology",
              "Due diligence systems",
              "Portfolio construction guidance",
              "Private investor community access",
            ].map((value, index) => (
              <li key={value}>
                <p>0{index + 1}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/who_1.jpg"
          width={500}
          height={500}
          alt="Our Team"
          quality={100}
          className={styles.last}
        />
      </section>
      <Services />
      <section className={styles.form}>
        <Image
          src={"/form.jpg"}
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
