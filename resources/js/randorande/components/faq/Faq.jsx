import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
    return (
        <div className="faq-container">
            <div className="faq-heading">Frequently Asked Questions (FAQ)</div>
            <section>
                <h2>1. What is RandoRande?</h2>
                <p>
                    <strong>RandoRande</strong> is a unique date ideas app designed to spark
                    creativity in your relationship.Whether you're looking for
                    new date ideas or want to create lasting memories,
                    RandoRande has you covered.
                </p>
            </section>

            <section>
                <h2>2. How does RandoRande work?</h2>
                <ul>
                    <li>
                        <h3>1. Choose Your Search Parameters:</h3>
                        <p>
                            Begin by selecting your preferences such as budget,
                            season, time of day, and more.
                        </p>
                    </li>
                    <li>
                        <h3>2. Get 3 Random Date Ideas:</h3>
                        <p>
                            Our database will generate 3 surprise date ideas
                            based on your selected criteria.
                        </p>
                    </li>
                    <li>
                        <h3>3. Select Your Date:</h3>
                        <p>
                            Review the options and choose the date that appeals
                            to you the most.
                        </p>
                    </li>
                    <li>
                        <h3>4. Reveal Your Date:</h3>
                        <p>
                            Experience the excitement of our scratch reveal to
                            uncover the details of your chosen date.
                        </p>
                    </li>
                    <li>
                        <h3>5. Go on Your Date:</h3>
                        <p>
                            Make plans and enjoy your surprise date with your
                            significant other.
                        </p>
                    </li>
                    <li>
                        <h3>6. Journal Your Experience:</h3>
                        <p>
                            After the date, log your thoughts, upload a photo,
                            and create a lasting memory in your personal
                            journal.
                        </p>
                    </li>
                </ul>
                <section>
                    <h2>
                        3. What information is included in the surprise date
                        ideas?
                    </h2>
                    <p>
                        Each date suggestion comes with a key featuring an icon to
                        provide additional details. For example, you might find
                        icons indicating whether the date will involve food, a game, to dress comfortably, or any other relevant
                        information.
                    </p>
                </section>

                <section>
                    <h2>4. How does the profile and journal feature work?</h2>
                    <p>
                        Your profile becomes a personalized diary of your dating
                        journey. Each selected date is added to your profile,
                        and you can upload a photo and add journal entries to
                        capture the memories.
                    </p>
                </section>
                <section>
                    <h2>5. Can I repeat a date I've already experienced?</h2>
                    <p>
                        No, once you've selected and experienced a date, it
                        won't be presented as an option again, ensuring each
                        experience is unique.
                    </p>
                </section>
                <section>
                    <h2>6. How do I get started with RandoRande?</h2>
                    <p>
                        Simply sign up, create a profile, and start customizing
                        your date preferences. The app will guide you through
                        the rest, making it easy to discover and enjoy exciting
                        new experiences with your significant other. <Link to="/register">Click here </Link> to sign up.
                    </p>
                </section>
                <section>
                    <h2>7. Is RandoRande free to use?</h2>
                    <p>
                        Yes, RandoRande is free to use. We want everyone to be
                        able to experience the joy of quality time with their
                        loved one.
                    </p>
                </section>
                <section>
                    {/* where should contact us lead to? */}
                    <h2>
                        8. How can I provide feedback or suggest new features?
                    </h2>
                    <p>
                        We'd love to hear from you! Visit our
                        <Link to=""> Contact Us</Link> page to share your
                        feedback, suggestions, or report any issues...
                    </p>
                </section>
                    {/* do we have ramdomiser button? */}
                <section>
                    <h2>9. Can I be surprised with absolutely anything?</h2>
                    <p>
                        Yes, we have a "Surprise Me" button for users who want
                        to be open to any date idea. It's perfect for those
                        spontaneous moments when you're up for an adventure!
                    </p>
                </section>
            </section>

        </div>
    );
};

export default Faq;
