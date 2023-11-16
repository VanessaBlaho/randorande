import { Link } from "react-router-dom";

export default function AboutUs() {

return (
    <>
        <h1>The RandoRande Team</h1>;
        <div className="team__container">
            <div className="team-member__container crisafi">
                <img
                    className="team-member_img"
                    src="/images/about-us/1.png"
                    alt="Lauren Crisafi"
                />
                <p className="team-member_name">Lauren Crisafi</p>
            </div>
            <br />
            <div className="team-member__container kokoreva">
                <img
                    className="team-member_img"
                    src="/images/about-us/3.png"
                    alt="Maria Kokoreva"
                />
                <p className="team-member_name">Maria Kokoreva</p>
            </div>
            <br />
            <div className="team-member__container blaho">
                <img
                    className="team-member_img"
                    src="/images/about-us/3.png"
                    alt="Vanessa 'Eats Prague' Blaho"
                />
                <p className="team-member_name">Vanessa Blaho</p>
            </div>
            <br />
            <div className="team-member__container daniels">
                <img
                    className="team-member_img"
                    src="/images/about-us/2.png"
                    alt="Nicholas Ephram Ryan Daniels"
                />
                <p className="team-member_name">Ephram Daniels</p>
            </div>
        </div>
    </>
);

}