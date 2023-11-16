export default function Homepage() {
    return (
        <>
            <div className="homepage">
                <div className="homepage__logo">
                    <img src="./logos/Rando-long.svg" alt="randorande logo" />
                </div>

                <div className="homepage__instructions">
                    <h1 className="homepage__instructions-title">
                        How it works
                    </h1>
                    <ul className="homepage__instructions-list">
                        <li className="homepage__instructions-item">
                            What kind of date are you in the mood for?
                        </li>
                        <li className="homepage__instructions-item">
                            Choose your search parameters
                        </li>
                        <li className="homepage__instructions-item">
                            Get 3 random date ideas based on your search
                        </li>
                        <li className="homepage__instructions-item">
                            Based on hints, choose which date you want
                        </li>
                        <li className="homepage__instructions-item">
                            Scratch off to reveal your date
                        </li>
                        <li className="homepage__instructions-item">
                            Go on your date with your significant other
                        </li>
                        <li className="homepage__instructions-item">
                            Keep track of your dating journey in your Date Diary
                        </li>
                        <li className="homepage__instructions-item">
                            Make everlasting memories
                        </li>
                    </ul>
                </div>
                <div className="homepage__btn">
                    <button className="homepage__btn-trigger">
                        Gimme ideas!
                    </button>
                </div>
            </div>
        </>
    );
}
