import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <>
            <div className="about-us__headline__container">
                <h1 className="about-us__headline">The RandoRande Team</h1>
            </div>
            <div className="team__container">
                <div className="team-member__container crisafi">
                    <img
                        className="team-member__img"
                        src="/images/about-us/1.png"
                        alt="Lauren Crisafi"
                    />
                    <p className="team-member__name">Lauren Crisafi</p>
                </div>
                <br />
                <div className="team-member__container kokoreva">
                    <img
                        className="team-member__img"
                        src="/images/about-us/3.png"
                        alt="Maria Kokoreva"
                    />
                    <p className="team-member__name">Maria Kokoreva</p>
                </div>
                <br />
                <div className="team-member__container blaho">
                    <img
                        className="team-member__img"
                        src="/images/about-us/3.png"
                        alt="Vanessa 'Eats Prague' Blaho"
                    />
                    <p className="team-member__name">Vanessa Blaho</p>
                </div>
                <br />
                <div className="team-member__container daniels">
                    <img
                        className="team-member__img"
                        src="/images/about-us/2.png"
                        alt="Nicholas Ephram Ryan Daniels"
                    />
                    <p className="team-member__name">Ephram Daniels</p>
                </div>
            </div>
            <div className="about_us__text">
                <p>
                    <strong>RandoRande</strong> is a date ideas generator and
                    personal date journal. The web application was developed by
                    4 classmates at Coding Bootcamp Praha in November 2023 in
                    Prague, Czech Republic.
                </p>

                <p>
                    The name RandoRande comes from the English word "
                    <strong>rando</strong>", which is short for "
                    <strong>random</strong>
                    ", and the Czech word for date "<strong>rande</strong>",
                    which is a loanword borrowed from the French word "
                    <strong>rendezvous</strong>
                    ". <i>Rendezvous</i> means a meet-up between 2 or more
                    people.
                </p>

                <p>
                    Paired up with someone special but at a loss for what to do?
                    We've taken out all the guesswork for you.
                </p>

                <div className="link_to_search__container">
                    <Link className="link_to_search" to={"/date-search"}>
                        Try our date generator today!
                    </Link>
                </div>
            </div>
        </>
    );
}
